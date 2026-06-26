"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PressHoldProps
  extends Omit<React.ComponentProps<"button">, "onClick" | "children"> {
  /** How long the button must be held, in ms, before firing. Default 10000 (10s). */
  holdMs?: number;
  /** Fires once after an uninterrupted hold of `holdMs`. */
  onComplete: () => void;
  /** Idle label. */
  children: React.ReactNode;
  /**
   * Label shown while holding. Receives the whole-seconds remaining so callers
   * can render a countdown. Defaults to "Keep holding… {n}s".
   */
  holdingLabel?: (secondsLeft: number) => React.ReactNode;
}

/**
 * A press-and-hold button: the action only fires after the pointer (or
 * Space/Enter) is held down continuously for `holdMs`. A progress bar fills as
 * you hold and resets the instant you let go. Because it requires a sustained,
 * uninterrupted human press rather than a single click, it's a lightweight gate
 * against scripted/automated submission.
 */
export function PressHold({
  holdMs = 10_000,
  onComplete,
  children,
  holdingLabel,
  className,
  disabled,
  ...props
}: PressHoldProps) {
  const [progress, setProgress] = React.useState(0);
  const [holding, setHolding] = React.useState(false);

  const rafRef = React.useRef<number | null>(null);
  const startRef = React.useRef(0);
  const doneRef = React.useRef(false);
  const onCompleteRef = React.useRef(onComplete);
  React.useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const stopLoop = React.useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const cancel = React.useCallback(() => {
    if (doneRef.current) return;
    stopLoop();
    setHolding(false);
    setProgress(0);
  }, [stopLoop]);

  const begin = React.useCallback(() => {
    if (disabled || doneRef.current || holding) return;
    setHolding(true);
    startRef.current = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - startRef.current) / holdMs);
      setProgress(p);
      if (p >= 1) {
        doneRef.current = true;
        stopLoop();
        setHolding(false);
        onCompleteRef.current();
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [disabled, holding, holdMs, stopLoop]);

  // Clean up any in-flight animation frame on unmount.
  React.useEffect(() => stopLoop, [stopLoop]);

  const secondsLeft = Math.ceil(((1 - progress) * holdMs) / 1000);

  return (
    <button
      type="button"
      aria-disabled={disabled}
      disabled={disabled}
      data-holding={holding ? "true" : undefined}
      onPointerDown={(e) => {
        if (disabled) return;
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        begin();
      }}
      onPointerUp={cancel}
      onPointerCancel={cancel}
      onKeyDown={(e) => {
        if (e.key !== " " && e.key !== "Enter") return;
        e.preventDefault();
        if (e.repeat) return;
        begin();
      }}
      onKeyUp={(e) => {
        if (e.key === " " || e.key === "Enter") cancel();
      }}
      onBlur={cancel}
      onContextMenu={(e) => e.preventDefault()}
      className={cn(
        "relative isolate flex h-11 w-full touch-none items-center justify-center overflow-hidden rounded-lg border border-primary/50 bg-primary/10 text-sm font-semibold text-foreground transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {/* Progress fill */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 z-[-1] bg-primary"
        style={{ width: `${progress * 100}%` }}
      />
      <span className="relative flex items-center gap-2">
        {holding
          ? (holdingLabel?.(secondsLeft) ?? `Keep holding… ${secondsLeft}s`)
          : children}
      </span>
    </button>
  );
}
