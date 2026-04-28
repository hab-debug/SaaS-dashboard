import { useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="fixed inset-0 pointer-events-none z-50"
    >
      <div
        className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        style={{
          left: pos.x - 128,
          top: pos.y - 128,
        }}
      />
    </div>
  );
}