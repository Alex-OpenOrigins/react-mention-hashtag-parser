React Mention Parser
====
Enhance your strings with _live_ mention components.


## Features:
* Super small **~430 B**
* Available for React and Preact
* Custom renderer for each mention
* Custom 'click' handler for each mention
* Generic output
* Drop-in and use it. Your code will not have to adapt to anything.

## Demo
React: https://codesandbox.io/s/qxow0z7v49

Preact: https://codesandbox.io/s/qv8qz89ll9

## Quick example
```jsx harmony
// Your typical 'component'
const Card = () => (
    <p>
        Here goes my card contents with #static text inside
    </p>
);

// Will become
import ReactMentionParser from "react-mention-parser";

const Card = () => (
    <p>
        <ReactMentionParser>
            Here goes my card contents with #static text inside
        </ReactMentionParser>
    </p>
);
```

## Install
The usual flow

```bash
npm install react-hashtag --save
```

## Api
The component `ReactMentionParser` is actually pretty generic. Is not something that someone can't do in half an hour. But, this one has some generic API that could make you turn.

| Name | Type | Description
| ---- | ---- | -----------
| renderMention(value: String, onClick: Function) | function | Returns the custom element to be renderer instead of a `<span>`. You can go wild here.
| onMentionClick(value: String, e: Event) | function | The click handler for each mentions. This will be called with the mention value that got clicked.


## Examples

### Custom renderer
```jsx harmony
const Card = (props) => (
    <p>
        <ReactMentionParser
            renderMention={(mentionValue) => (
                <div className="mention">{mentionValue}</div>
            )}
        >
            {props.children}
        </ReactMentionParser>
    </p>
);
```

### With styled components
```jsx harmony

const Mention = styled.span`
    color: tomato;
`;

const Card = (props) => (
    <p>
        <ReactMentionParser
            renderHashtag={(mentionValue) => (
                <Mention>{mentionValue}</Mention>
            )}
        >
            {props.children}
        </ReactHashtag>
    </p>
);
```

### Reusable or composition 
You could reuse the same definition, if that's something you're looking for. The following example uses the anchor and defines a component that will redirect to certain hashtag pages.
```jsx harmony
const StyledHashtag = styled.a`
    color: tomato;
`;

/**
* Custom component to render the hashtags with a custom renderer
*/
const Mentions = (props) => (
    <ReactMentionParser
        renderMention={(mentionValue) => (
            <StyledHashtag
                href={`/search/${mentionValue}`}
            >
                {mentionValue}
            </StyledHashtag>
        )}
    >
        {props.children}
    </ReactMentionParser>
);

const Card = (props) => (
    <p>
        <ReactMentionParser>
            {props.children}
        </ReactMentionParser>
    </p>
);
```

## Questions?
Feel free to file an issue if you have any questions.
