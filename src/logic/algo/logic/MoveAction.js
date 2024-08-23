import { useEffect, useState } from "react";

function MoveAction() {
  const [keyState, setKeyState] = useState({
    up: 0,
    down: 0,
    left: 0,
    rgiht: 0,
  });

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    }

    function handleTouchMove(event) {
      touchEndX = event.touches[0].clientX;
      touchEndY = event.touches[0].clientY;
    }

    function handleTouchEnd() {
      if (touchEndX < touchStartX - 30) {
        setKeyState({ up: 0, down: 0, left: 1, rgiht: 0 });
      }
      if (touchEndX > touchStartX + 30) {
        setKeyState({ up: 0, down: 0, left: 0, rgiht: 1 });
      }
      if (touchEndY < touchStartY - 30) {
        setKeyState({ up: 1, down: 0, left: 0, rgiht: 0 });
      }
      if (touchEndY > touchStartY + 30) {
        setKeyState({ up: 0, down: 1, left: 0, rgiht: 0 });
      }
    }

    window.addEventListener("touchstart", handleTouchStart, false);
    window.addEventListener("touchmove", handleTouchMove, false);
    window.addEventListener("touchend", handleTouchEnd, false);

    const keyHandler = (e) => {
      if (e.key === "ArrowDown") {
        setKeyState({ up: 0, down: 1, left: 0, rgiht: 0 });
      } else if (e.key === "ArrowUp") {
        setKeyState({ up: 1, down: 0, left: 0, rgiht: 0 });
      } else if (e.key === "ArrowLeft") {
        setKeyState({ up: 0, down: 0, left: 1, rgiht: 0 });
      } else if (e.key === "ArrowRight") {
        setKeyState({ up: 0, down: 0, left: 0, rgiht: 1 });
      }
    };
    window.addEventListener("keydown", keyHandler);
    window.addEventListener("keyup", () =>
      setKeyState({ up: 0, down: 0, left: 0, rgiht: 0 })
    );

    return () => {
      window.removeEventListener("touchstart", handleTouchStart, false);
      window.removeEventListener("touchmove", handleTouchMove, false);
      window.removeEventListener("touchend", handleTouchEnd, false);
    };
  }, []);

  return keyState;
}

export default MoveAction;
