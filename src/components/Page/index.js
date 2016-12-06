import React, {PropTypes, Component} from 'react';
import styles from './Page.css'
import animate from '../../assets/js/animate'

export default class Page extends Component {

  componentDidMount() {
    this.elem = document.querySelector(`.${styles.bottomLine}`);
    this.currentWidth = parseInt(getComputedStyle(this.elem).width, 10);
    this.maxWidth = parseInt(getComputedStyle(this.elem.parentNode).width, 10);
  }

  longLine() {
    animate({
      duration: 300,
      timing: (timeFraction) => {
        return timeFraction;
      },
      draw: (progress) => {
        this.elem.style.width = (this.maxWidth - this.currentWidth) * progress + this.currentWidth + 'px';
      }
    });
  }

  shortLine() {
    animate({
      duration: 300,
      timing: (timeFraction) => {
        return timeFraction;
      },
      draw: (progress) => {
        this.elem.style.width = (this.maxWidth - this.currentWidth) * (1 - progress) + this.currentWidth + 'px';
      }
    });
  }

  hideLine() {
    animate({
      duration: 300,
      timing: (timeFraction) => {
        return timeFraction;
      },
      draw: (progress) => {
        this.elem.style.width = (this.maxWidth - this.currentWidth) * (1 - progress) + this.currentWidth + 'px';
      }
    });
  }

  render() {
    let lineClassName = styles.bottomLine;
    return (
      <div className={styles.main} onMouseEnter={() => this.longLine()} onMouseLeave={() => this.shortLine()} onClick={() => this.hideLine()}>
        It's '/page'It's '/page'It's '/page'
        <div className={lineClassName}></div>
      </div>
    )
  }

}