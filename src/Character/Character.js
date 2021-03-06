import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Character extends PureComponent {
  static propTypes = {
    imageSource: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  render() {
    const { imageSource, name, description } = this.props;
    return (
      <div class="character">
        <div class="character-image">
          <img width="400" src={imageSource} alt="Placeholder" />
        </div>
        <div class="character-content">
          <div class="media-content">
            <p class="title is-4">{name}</p>
          </div>
        </div>

        <div class="content">{description}</div>
      </div>
    );
  }
}
