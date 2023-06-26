# UI Schema

The following object describes the user interface defined as a variable.
This variable is processed on by functions in order to render the appropriate data.


## Interfaces


### Path Interface
```tsx
//concept
interface Path {
  [...Path]: Collection;
}
```

### Collection Interface

```tsx
//concept
interface Collection {
  [...Collection]: {
    Modules
  }
}
```

### Module Interface

```tsx
//concept
interface Module {
  [...Module]: {
    ...moduleData,
    Prompts
  }
}
```


### Prompt Interface

```tsx
//concept
interface Prompt {
  ...promptData
}
```


## Example
Can there be improvements to this?
Yeah, probably.

```tsx

let ui = {
  Engineer: {
    "Version 3 Crash Course":{
      "Introduction": {
        ...,
        header: "Introduction to RO.B.E",
        hasCode: true,
        fileSource: "https://res.cloudinary.com/eduprojectsil/video/upload/:id/:movie.mov",
        souceType: 'video',
        prompts: {
          impact: 100,
          action: `inspire`,
          icon: `⚡`,
          request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
            `Learn Coding`
          )}?`,
          response: (
            <div>
                This is your answer!
            </div>
          ),
          requestInSpanish: ``,
        }
      }
    }
  }
}


```
