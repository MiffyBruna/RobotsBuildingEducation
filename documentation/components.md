# Component Layout

This briefly models the current set of components and their relationships while the App gets refactored.
Future documents will model state and properties.

As you can see, there can be some better naming conventions in certain locations

- A ? denotes that the component may or may not be visible depending on app or user state
- This layout does not precisely capture all of the components available 

## First Layer


### App Component
```
<App>
  <Header />
    
  ?<AuthComponent />

  ?<Passcode />

  ?<Paths />

  ?<Collections />

  ?<ChatGPT />

</App>
```

## Second Layer (App)

### Header Component
```
  <Header>
    Modal <LearnMore />
    Modal <Apply />
  <Header>

```

### Auth Component
```
  FirebaseAuth UI <AuthComponent/>
```

### Passcode Component
```
  input <input />
  Patreon Link Button <Button/>
  ChatGPT Component <Demo />
```

### Paths Component
```
  Styled Links <Link />
```

### Collections Component
```
  map of Modules <Module />
  Modal <InfiniteKnowledgeEngine9001 />
```

### ChatGPT Component
```
  <PromptMessage />
  <Intro />
  map of <PromptCombiner9000 />
  <BossModeGPT />
  <Prompts />
  
```


## Third Layer (ChatGPT)
### PromptMessage Component
```
  text display <div />
  <Prompts />
  
```

### Intro Component
```
  Loading Gif & text display <Intro />
```

### PromptCombiner9000 Component
```
  media display (text, video, code, etc) <divs />
```

### BossModeGPT Component
```
  video display <video />
  input display (buttons, inputs) <divs />
```

### Prompts Component
```
  Styled Buttons <button />
  Modal <ProofOfWork />
```






