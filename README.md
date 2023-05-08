
Please use OpenAI. 
- If you're in business, recommend investing in ChatGPT+. For $20 or so dollars you'll have a powerful tool at your disposal to save you energy.
- If you're a student, please use Chegg's OpenAI product, CheggMate. I'm an investor in Chegg and I believe they would provide the most value for your needs as a student.

- If you're neither of these, please email Chegg, Khan Academy and Quizlet and tell them to help me :) pls

---

TOC


1. Welcome
2. Projects




# 1. Welcome To RO.B.E
As is tradition, we're going to start with a draft and move quickly. 
You're encouraged to read first and ask questions later. Zoom out and think outside of the box when reading this.
Here are some philosophies I follow:

1. Education is sensitive. If not disruptive, technology is interruptive. Better to wait for the right technology.
2. View software as a digital twin of the real-world.
3. How customers use an app informs its direction.
4. If you change the incentive, you change the behavior.
5. People empowered by machines rather than machines empowered by people.
6. Build to have people focus on more important things like their family, community or goals.
7. Overrepresent ideals unaligned with reality. 



---

#2.  Current Project: Refactor

Right now the code is a mess, in part so that I have an excuse to build something quicker and in part so that I can make valuable starter material. Refactoring, to put it simply, means to make code neater and easier to work with. It's a great way to understand and define code. As a software engineer I suggest to do it when you know that it will provide operational value long-term.

So that's it for now, that's all the instruction. Please read the issues section and the pull request section to understand more. At this point in time, I'm assuming that you've watched the material I've created about Github in the app and you've learned a thing or two on Google, Youtube or ChatGPT.


```
Refactoring code:

Refactoring is a disciplined technique for restructuring an existing body of code, 
altering its internal structure without changing its external behavior.
```


## Coding Principles


### Think about computing and work

1. Think about the amount of computing happening to achieve a task. Can less computing be used? In general, we want less computing over the "convenience" of code.

 ```
         <Demo
            patreonObject={
              ui()["Engineer"]["Crash Course"]["Introduction To RO.B.E"]
            }
        />
 
 ```
 
 We have a property here called `patreonObject` and it's defined by the **result** of `ui()[...path to demo lesson]`. If you examine the contents of `ui()`, you'll that it's this:

```
  export const ui = (globalUserModulesFromDB = {}): IPath => {
    // can branch this further to reduce JSON size computed when invoked.

    return {
      Engineer: Engineer,
      Creator: Creator,
      Entrepeneur: Entrepeneur,
      "RO.₿.E": LittleVillage(globalUserModulesFromDB), // get database sets
      "Boss Mode": BossMode,
      // "Raise Ur Hand": {},
    };
  };
```

You'll note that the developer wrote a comment saying that they can "branch [this code] further" meaning that developers will create an argument so that the software is only every rendering certain modules and paths rather than **all of the data**.


This is what I mean by "think about computing and work". In the grand scheme of things, it's not that big of a deal, but thinking in this way will generally create more fruitful software no different than how good soil creates better agriculture.





