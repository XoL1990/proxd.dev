import Button, { ButtonTextType, ButtonType } from "components/button";
import Masonry from "components/masonry";
import Tile, { TileType } from "components/tile";
import { projects } from "config";
import ProjectColor from "enums/projectColor";
import Technology from "enums/technology";
import React from "react";
import { useRecoilValue } from "recoil";
import filtersAtom from "state/atoms/filtersAtom";
import "./tiles.scss";

const openUrl = (url: string) => {
  window.open(url, "_blank");
};

const Tiles = React.memo(() => {
  const filters = useRecoilValue(filtersAtom);

  const filteredProjects =
    filters.length > 0
      ? projects.filter((project) => project.tags.some((tag) => filters.includes(tag)))
      : projects;

  let projectIndex = 0;

  return (
    <Masonry className="tiles">
      {filters.length === 0 && (
        <Tile className="tiles__project" type={TileType.green}>
          <h2 className="tiles__space">Education</h2>
          <div className="tiles__date">02.2013 - 10.2014</div>
          <h4>Master of Science. Silesian University of Technology in Gliwice</h4>
          <div className="tiles__description2 tiles__space">
            Faculty of Automatic Control, Electronics and Computer Science.
          </div>
          <div className="tiles__date">10.2009 – 02.2013</div>
          <h4>Bachelor of Engineering. Silesian University of Technology in Gliwice.</h4>
          <div className="tiles__description2">Faculty of Applied Mathematics.</div>
        </Tile>
      )}
      {filters.length === 0 && (
        <Tile className="tiles__project" type={TileType.purplegrey}>
          <h2 className="tiles__space">Experience</h2>
          <div className="tiles__date">01.2022 - 08.2022</div>
          <div className="tiles__title">Krajowa Izba Fizjoterapii</div>
          <div className="tiles__description tiles__space">Senior Frontend Developer</div>
          <div className="tiles__date">10.2013 - present as support</div>
          <div className="tiles__title">Gorrion Software House</div>
          <div className="tiles__description tiles__space">Fullstack/Mobile Developer</div>
          <div className="tiles__date">09.2012 - 09.2013</div>
          <div className="tiles__title">Geosolution Sp. z o.o.</div>
          <div className="tiles__description">Fullstack Developer (Java)</div>
        </Tile>
      )}
      {filters.length === 0 && (
        <Tile className="tiles__project">
          <h2 className="tiles__space">Hobby</h2>
          <div className="tiles__text">Blockchain, Machine learning, Image processing, Squash</div>
        </Tile>
      )}
      {filteredProjects.map((project) => {
        let type = TileType.white;
        let buttonType = ButtonType.white;
        let buttonTextType = ButtonTextType.default;
        let roleClass = "";

        switch (project.color) {
          case ProjectColor.orange:
            type = TileType.orange;
            buttonTextType = ButtonTextType.orange;
            roleClass = " tiles__white";
            break;
          case ProjectColor.purple:
            type = TileType.purple;
            buttonTextType = ButtonTextType.purple;
            break;
          case ProjectColor.purpleWhite:
            type = TileType.purple;
            buttonType = ButtonType.black;
            buttonTextType = ButtonTextType.purple;
            roleClass = " tiles__white";
            break;
          case ProjectColor.green:
            type = TileType.green;
            buttonTextType = ButtonTextType.green;
            roleClass = " tiles__white";
            break;
          case ProjectColor.grey:
            type = TileType.grey;
            buttonType = ButtonType.black;
            buttonTextType = ButtonTextType.grey;
            roleClass = " tiles__white";
            break;
          case ProjectColor.gray:
            type = TileType.gray;
            buttonType = ButtonType.black;
            buttonTextType = ButtonTextType.gray;
            roleClass = " tiles__purple";
            break;
          case ProjectColor.white:
            buttonType = ButtonType.green;
            roleClass = " tiles__green";
            break;
          case ProjectColor.greyPurple:
            type = TileType.silver;
            buttonType = ButtonType.purple;
            roleClass = " tiles__purple";
            break;
          case ProjectColor.greyBlack:
            type = TileType.silver;
            buttonType = ButtonType.purple;
            roleClass = " tiles__purple";
            break;
          case ProjectColor.light:
            type = TileType.light;
            break;
          case ProjectColor.lightPurple:
            type = TileType.light;
            buttonType = ButtonType.purple;
            roleClass = " tiles__purple";
            break;
          default:
            break;
        }

        projectIndex += 1;

        return (
          <Tile
            className="tiles__project"
            type={type}
            isDotVisible
            image={project.image}
            imagePosition={project.imagePosition}
            key={projectIndex}
          >
            <h2>
              {project.title}
              {project.supTitle && <sup className="tiles__sup">{project.supTitle}</sup>}
            </h2>
            <div className="tiles__date tiles__space">{project.date}</div>
            <div className="tiles__project-description">{project.description}</div>
            <div className={`tiles__role${roleClass}`}>{project.role}</div>
            <div className="tiles__tags">
              {project.tags.map((tag) => `#${Technology[tag]}`).join(" ")}
            </div>
            {project.url && (
              <Button
                onClick={() => openUrl(project.url)}
                type={buttonType}
                textType={buttonTextType}
                text="See yourself"
                className="tiles__button"
              />
            )}
            {project.androidUrl && (
              <Button
                onClick={
                  project.androidUrl === "null" ? undefined : () => openUrl(project.androidUrl)
                }
                className="tiles__button tiles__button--mobile"
              >
                <img src="/play-store.svg" alt="Play Store Button" />
              </Button>
            )}
            {project.iosUrl && (
              <Button
                onClick={project.iosUrl === "null" ? undefined : () => openUrl(project.iosUrl)}
                className="tiles__button tiles__button--mobile"
              >
                <img src="/app-store.svg" alt="App Store Button" />
              </Button>
            )}
          </Tile>
        );
      })}
    </Masonry>
  );
});

export default Tiles;
