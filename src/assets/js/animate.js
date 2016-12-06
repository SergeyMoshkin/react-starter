let animate = (options) => {

  let start = performance.now();

  requestAnimationFrame(animate = (time) => {

    let timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
    else {
      return true
    }

  });
};

export default animate