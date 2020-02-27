// utility functions
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const drawPolyline = ({ ctx, points }) => {
  const { x, y } = points[0];
  ctx.moveTo(x, y);

  points.slice(1, points.length).forEach(({ x, y }) => {
    ctx.lineTo(x, y);
  });
  ctx.fill();
  ctx.closePath();
};

// linear interpolation
export const lerp = (a, b, t) => {
  const r = (1 - t) * a + t * b;
  return r;
};

export const setMinMax = points => {
  return points.reduce((curr, next) => {
    let { x: xNext, y: yNext } = next;
    let { x: xCurr, y: yCurr } = curr;
    if (typeof xCurr === "undefined") {
      return {
        x: {
          min: xNext,
          max: xNext
        },
        y: {
          min: yNext,
          max: yNext
        }
      };
    }

    return {
      x: {
        min: xNext < xCurr.min ? xNext : xCurr.min,
        max: xNext > xCurr.max ? xNext : xCurr.max
      },
      y: {
        min: yNext < yCurr.min ? yNext : yCurr.min,
        max: yNext > yCurr.max ? yNext : yCurr.max
      }
    };
  }, {});
};

export const calculatePoolTextPosition = ({
  xMin = 0,
  xMax = 0,
  yMin = 0,
  yMax = 0,
  poolWidth,
  margin,
  textHeight,
  textWidth,
  maxScreenWidth
}) => {
  let orientation = {};
  let position = {
    position: "absolute"
  };
  if (xMin + poolWidth + margin + textWidth > maxScreenWidth) {
    position.right = `${xMin - maxScreenWidth + textWidth + margin}px`;
    orientation.x = "left";
  } else {
    position.left = `${xMin + poolWidth + margin}px`;
    console.log(xMin);
    orientation.x = "right";
  }
  if (yMin - textHeight < 0) {
    position.top = `${yMax}px`;
    orientation.y = "bottom";
  } else {
    position.top = `${yMin - textHeight}px`;
    orientation.y = "top";
  }
  return {
    orientation,
    position
  };
};

export const calculateTextPosition = props => {
  const {
    x,
    y,
    iconWidth = 50,
    margin,
    textHeight,
    textWidth,
    maxScreenWidth,
    layerNudge,
    isActive
  } = props;

  let orientation = {};
  let style = {
    position: "absolute"
  };
  if (isActive) {
    console.log({
      x,
      y,
      margin,
      textHeight,
      textWidth,
      maxScreenWidth,
      isActive
    });
  }
  if (x + iconWidth + margin + textWidth + layerNudge > maxScreenWidth) {
    style.right = `${x - (textWidth + margin)}px`;
    orientation.x = "left";
    console.log("left");
  } else {
    style.left = `${iconWidth + margin}px`;
    orientation.x = "right";
  }
  if (y - textHeight < 0) {
    style.top = `${y}px`;
    orientation.y = "bottom";
    console.log("bottom");
  } else {
    style.top = `${y - textHeight}px`;
    orientation.y = "top";
    console.log("top");
  }
  return {
    orientation,
    positionCSS: style
  };
};
