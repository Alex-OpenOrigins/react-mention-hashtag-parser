import { parse } from "../lib";

let createElement;
let canRenderArray = false;

try {
  createElement = require("react").createElement;
  canRenderArray = true;
} catch (err) {
  try {
    createElement = require("preact").h;
    canRenderArray = false;
  } catch (err) {
    console.log(
      "[react-mention] there's no react nor preact available to import"
    );
  }
}

const defaultMentionRenderer = createElement => (mention, onClick) =>
  createElement(
    "span",
    {
      key: mention,
      onClick: onClick ? e => onClick(mention, e) : null
    },
    mention
  );

export default props => {
  const contents =
    typeof props.children === "object" && props.children.length
      ? !isNaN(props.children.length)
        ? props.children[0]
        : props.children
      : props.children;
  const mentionRenderer =
    props.renderMention || defaultMentionRenderer(createElement);
  const onMentionClick = props.onMentionClick;
  const parsed = parse(contents, mentionRenderer, onMentionClick);

  return canRenderArray ? parsed : createElement("span", null, parsed);
};
