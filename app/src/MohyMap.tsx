import { useEffect, useState } from "react";
import { japaneseThemePalette, textBlock } from "./styles/lazyStyles";
import { useZap } from "./App.hooks";
import { RoxanaLoadingAnimation, postInstructions } from "./common/uiSchema";

let mapImage = {
  // parent nodes
  "Linked Lists": {
    children: {
      "Merging/Sorting": {
        children: {
          "Two Pointers": {
            content: "",
          },
          "Merge Sort": {
            content: "",
          },
          Heap: {
            content: "",
          },
        },
      },
      Design: {
        children: {
          "LRU/LFU Cache": {
            children: {
              "Hash Map": {
                content: "",
              },
              "Doubly Linked List": {
                content: "",
              },
            },
          },
          "Stack/Queue": {
            children: {
              "Doubly Linked List": {
                content: "",
              },
            },
          },
        },
      },
      "Perform Reversal": {
        children: {
          "Two Pointers": {
            content: "",
            children: {
              "Fast & Slow Pointers": {
                content: "",
              },
            },
          },
        },
      },
      "Cycle Detection": {
        children: {
          "Fast & Slow Pointers": {
            content: "",
          },
        },
      },
      "Find Longest/Shortest Continuous Portion": {
        children: {
          "Sliding Window": {
            children: {
              "Hash Map/Set": {
                content: "",
              },
            },
          },
        },
      },
    },
  },
  Strings: {
    children: {
      "Longest/Shortest Subsequence": {
        children: {
          "Dynamic Programming": {
            children: {
              Memoization: {
                children: {
                  "Depth First Search": {
                    content: "",
                  },
                  "Hash Map": {
                    content: "",
                  },
                  Tabulation: {
                    children: {
                      "Arrays/Matrix": {
                        content: "",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "Counting + Frequency": {
        children: {
          "Hash Map": {
            content: "",
          },
        },
      },
      "Matching Prefix/Suffix": {
        children: {
          Trie: {
            children: {
              "Hash Map": {
                content: "",
              },
              "BFS/DFS": {
                content: "",
              },
            },
          },
        },
      },
      "Connected Words": {
        children: {
          Graph: {
            children: {
              "BFS/DFS": {
                content: "",
              },
            },
          },
        },
      },
      "Perform Reversal": {
        children: {
          "Two Pointers": {
            content: "",
            children: {
              "Fast & Slow Pointers": {
                content: "",
              },
            },
          },
        },
      },
      "Cycle Detection": {
        children: {
          "Fast & Slow Pointers": {
            content: "",
          },
        },
      },
      "Find Longest/Shortest Continuous Portion": {
        children: {
          "Sliding Window": {
            children: {
              "Hash Map/Set": {
                content: "",
              },
            },
          },
        },
      },
    },
  },
  Arrays: {
    children: {
      "Perform Reversal": {
        children: {
          "Two Pointers": {
            content: "",
            children: {
              "Fast & Slow Pointers": {
                content: "",
              },
            },
          },
        },
      },
      "Cycle Detection": {
        children: {
          "Fast & Slow Pointers": {
            content: "",
          },
        },
      },
      "Find Longest/Shortest Continuous Portion": {
        children: {
          "Sliding Window": {
            children: {
              "Hash Map/Set": {
                content: "",
              },
            },
          },
        },
      },
      "Count Ways/Possibilities": {
        children: {
          "Dynamic Programming": {
            children: {
              Memoization: {
                children: {
                  "Hash Map": {
                    content: "",
                  },
                  "Depth-First Search": {
                    content: "",
                  },
                  Tabulation: {
                    children: {
                      "Arrays/matrix": {
                        content: "",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "Multiple Sub-Array Sum Calculations": {
        children: {
          "Prefix sum": {
            children: {
              Arrays: {
                content: "",
              },
            },
          },
        },
      },
      "Permutations/Combinations": {
        children: {
          Backtracking: {
            children: {
              Recursion: {
                content: "",
              },
            },
          },
        },
      },
      Sorting: {
        children: {
          "Merge sort": {
            content: "",
          },
          Heap: {
            children: {
              "Kth Largest": {
                children: {
                  "Min Heap": {
                    content: "",
                  },
                },
              },
              "Kth Smallest": {
                children: {
                  "Max Heap": {
                    content: "",
                  },
                },
              },
            },
          },
        },
      },
      "Find Top K Elements": {
        children: {
          Heap: {
            children: {
              "Kth Largest": {
                children: {
                  "Min Heap": {
                    content: "",
                  },
                },
              },
              "Kth Smallest": {
                children: {
                  "Max Heap": {
                    content: "",
                  },
                },
              },
            },
          },
          "Quick Select": {
            content: "",
          },
          "Built-in Sort": {
            children: {
              "Two Pointers": {
                content: "",
              },
              "Binary Search": {
                content: "",
              },
            },
          },
        },
      },
      "Intervals [start, end]": {
        children: {
          "Built-in Sort & Merge Intervals": {
            content: "",
          },
        },
      },
      "Search Problem": {
        children: {
          "Is It Sorted?": {
            children: {
              No: {
                children: {
                  "Hash Map": {
                    content: "",
                  },
                  "Built-in Sort": {
                    children: {
                      "Two Pointers": {
                        content: "",
                      },
                      "Binary Search": {
                        content: "",
                      },
                    },
                  },
                },
              },
              Yes: {
                children: {
                  "Built-in Sort": {
                    children: {
                      "Two Pointers": {
                        content: "",
                      },
                      "Binary Search": {
                        content: "",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  Tree: {
    children: {
      "Binary Search Tree": {
        children: {
          "Binary Search": {
            content: "",
          },
          "Traverse in sorted order": {
            children: {
              "Depth First Search": {
                children: {
                  Stack: {
                    content: "",
                  },
                  "Pre-Order": {
                    content: "",
                  },
                  "In-Order": {
                    content: "",
                  },
                  "Post-Order": {
                    content: "",
                  },
                },
              },
            },
          },
        },
      },
      "Binary Tree": {
        children: {
          "Breadth First Search": {
            children: {
              Queue: {
                content: "",
              },
            },
          },
          "Depth First Search": {
            children: {
              Stack: {
                content: "",
              },
              "Pre-Order": {
                content: "",
              },
              "In-Order": {
                content: "",
              },
              "Post-Order": {
                content: "",
              },
            },
          },
        },
      },
      "N-ary Tree": {
        children: {
          "Breadth First Search": {
            children: {
              Queue: {
                content: "",
              },
            },
          },
          "Depth First Search": {
            children: {
              Stack: {
                content: "",
              },
              "Pre-Order": {
                content: "",
              },
              "In-Order": {
                content: "",
              },
              "Post-Order": {
                content: "",
              },
            },
          },
        },
      },
    },
  },
  "Edge List": {
    children: {
      "Hash Map": {
        content: "",
      },
      Graph: {
        children: {
          "Explore Components": {
            children: {
              "Breadth First Search": {
                children: {
                  Queue: {
                    content: "",
                  },
                },
              },
              "Depth First Search": {
                children: {
                  Stack: {
                    content: "",
                  },
                  "Pre-Order": {
                    content: "",
                  },
                  "In-Order": {
                    content: "",
                  },
                  "Post-Order": {
                    content: "",
                  },
                },
              },
            },
          },
          "Final Ordering": {
            children: {
              "Topological Sort": {
                children: {
                  "Breadth First Search": {
                    children: {
                      Queue: {
                        content: "",
                      },
                    },
                  },
                  "Depth First Search": {
                    children: {
                      Stack: {
                        content: "",
                      },
                      "Pre-Order": {
                        content: "",
                      },
                      "In-Order": {
                        content: "",
                      },
                      "Post-Order": {
                        content: "",
                      },
                    },
                  },
                },
              },
            },
          },
          "Find Shortest Path": {
            children: {
              "Weighted Edges?": {
                children: {
                  No: {
                    children: {
                      "Breadth First Search": {
                        children: {
                          Queue: {
                            content: "",
                          },
                        },
                      },
                    },
                  },
                  Yes: {
                    children: {
                      "Djikstra's Shortest Path": {
                        children: {
                          "Min Heap": {
                            content: "",
                            children: {
                              "Priority Queue": {
                                content: "",
                                children: {
                                  Queue: {
                                    content: "",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "Count Paths": {
            children: {
              "Dynamic Programming": {
                children: {
                  Memoization: {
                    children: {
                      "Depth First Search": {
                        content: "",
                      },
                      "Hash Map": {
                        content: "",
                      },
                      Tabulation: {
                        children: {
                          "Arrays/Matrix": {
                            content: "",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  Matrix: {
    children: {
      "Connected Cells": {
        children: {
          Graph: {
            children: {
              "Explore Components": {
                children: {
                  "Breadth First Search": {
                    children: {
                      Queue: {
                        content: "",
                      },
                    },
                  },
                  "Depth First Search": {
                    children: {
                      Stack: {
                        content: "",
                      },
                      "Pre-Order": {
                        content: "",
                      },
                      "In-Order": {
                        content: "",
                      },
                      "Post-Order": {
                        content: "",
                      },
                    },
                  },
                },
              },
              "Final Ordering": {
                children: {
                  "Topological Sort": {
                    children: {
                      "Breadth First Search": {
                        children: {
                          Queue: {
                            content: "",
                          },
                        },
                      },
                      "Depth First Search": {
                        children: {
                          Stack: {
                            content: "",
                          },
                          "Pre-Order": {
                            content: "",
                          },
                          "In-Order": {
                            content: "",
                          },
                          "Post-Order": {
                            content: "",
                          },
                        },
                      },
                    },
                  },
                },
              },
              "Find Shortest Path": {
                children: {
                  "Weighted Edges?": {
                    children: {
                      No: {
                        children: {
                          "Breadth First Search": {
                            children: {
                              Queue: {
                                content: "",
                              },
                            },
                          },
                        },
                      },
                      Yes: {
                        children: {
                          "Djikstra's Shortest Path": {
                            children: {
                              "Min Heap": {
                                content: "",
                                children: {
                                  "Priority Queue": {
                                    content: "",
                                    children: {
                                      Queue: {
                                        content: "",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              "Count Paths": {
                children: {
                  "Dynamic Programming": {
                    children: {
                      Memoization: {
                        children: {
                          "Depth First Search": {
                            content: "",
                          },
                          "Hash Map": {
                            content: "",
                          },
                          Tabulation: {
                            children: {
                              "Arrays/Matrix": {
                                content: "",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "Counting Problem": {
        children: {
          "Dynamic Programming": {
            children: {
              Memoization: {
                children: {
                  "Depth First Search": {
                    content: "",
                  },
                  "Hash Map": {
                    content: "",
                  },
                  Tabulation: {
                    children: {
                      "Arrays/Matrix": {
                        content: "",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "Is Sorted?": {
        children: {
          "Search Problem": {
            children: {
              "Two Pointers": {
                content: "",
              },
              "Binary Search": {
                content: "",
              },
            },
          },
        },
      },
      "Perform Traversal": {
        children: {
          Spiral: { content: "" },
          Diagonal: { content: "" },
          "Matrix Multiplication": { content: "" },
          Rotation: { content: "" },
        },
      },
    },
  },
};

const NodeComponent = ({ node, onNodeSelect, isSelected }) => {
  const isLeafNode = !node.children || Object.keys(node.children).length === 0;

  return (
    <div style={{}}>
      <button
        onClick={() => onNodeSelect(node, isLeafNode)}
        style={{
          marginTop: 12,
          backgroundColor: isSelected ? "#add8e6" : "#f0f0f0",
          cursor: "pointer",
        }}
      >
        {node.name}
      </button>
      {isSelected && node.children && (
        <div>
          {Object.keys(node.children).map((childKey) => (
            <NodeComponent
              key={childKey}
              node={{ name: childKey, ...node.children[childKey] }}
              onNodeSelect={onNodeSelect}
              isSelected={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const StackTile = ({ name }) => {
  return (
    <div
      style={{
        backgroundColor: japaneseThemePalette.SakuraMochiPink,
        color: "white",
        padding: "10px",
        margin: "5px",
        borderRadius: "12px",
      }}
    >
      {name}
    </div>
  );
};

const GraphContainer = () => {
  const [root, setRoot] = useState({
    name: "Root",
    children: mapImage,
    isSelected: true,
  });
  const [path, setPath] = useState(["Root"]);
  const [content, setContent] = useState("");
  const [isDisplayingAI, setIsDisplayingAI] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [responseIsLoading, setResponseIsLoading] = useState(false);
  const [chatGptResponse, setChatGptResponse] = useState("");
  const [code, setCode] = useState("");
  //monetize your AI per usage
  let zap = useZap(1, "Robots Building Education Zap");

  const handleNodeSelect = (node, isLeafNode) => {
    setPath((prevPath) => [...prevPath, node.name]);
    setRoot({ name: node.name, children: node.children, isSelected: true });

    if (isLeafNode) {
      setContent(
        node.content === "" ? "Data about your algorithm" : node.content
      );
      setIsDisplayingAI(true);
    } else {
      setContent("");
      setIsDisplayingAI(false);
    }
  };

  const handleUndo = () => {
    setPath((prevPath) => {
      const newPath = prevPath.slice(0, prevPath.length - 1);
      const lastNodeName = newPath[newPath.length - 1];
      let currentNode = mapImage;
      for (let name of newPath.slice(1)) {
        currentNode = currentNode[name].children;
      }
      setRoot({ name: lastNodeName, children: currentNode, isSelected: true });
      return newPath;
    });
  };

  const handleRestart = () => {
    setPath(["Root"]);
    setRoot({ name: "Root", children: mapImage, isSelected: true });
    setContent("");
  };

  const handleAI = async (event) => {
    event.preventDefault();
    setHasError(false);
    setResponseIsLoading(true);

    let prompt = `Someone is requesting for help so that they can solve problems related to data structures and algorithms in computer science. This is the path of problems the requester is working with to solve their problem: ${path}. This is the code they're working with: ${code}
    
    Provide nicely formatted assistance so that they can perform better in an interview.`;

    const response = await fetch(postInstructions.url, {
      method: postInstructions.method,
      headers: postInstructions.headers,
      body: JSON.stringify({
        prompt,
      }),
    })
      .then((response) => {
        if (
          localStorage.getItem("patreonPasscode") ===
          import.meta.env.VITE_BITCOIN_PASSCODE
        ) {
          zap();
        }

        return response;
      })
      .catch(() => {
        setHasError(true);
      });

    if (response) {
      let data = await response.json();
      let content = data?.bot?.content;
      setChatGptResponse(content);
    }
    setResponseIsLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NodeComponent
        node={root}
        onNodeSelect={handleNodeSelect}
        isSelected={root.isSelected}
      />
      {path.length > 1 && (
        <button onClick={handleUndo} style={{ margin: "5px" }}>
          Undo
        </button>
      )}
      <br />
      <br />
      <button onClick={handleRestart} style={{ margin: "5px" }}>
        Restart
      </button>

      {isDisplayingAI ? (
        <>
          <button onClick={handleAI} style={{ margin: "5px" }}>
            Ask 🌀
          </button>

          <textarea
            onChange={(event) => setCode(event.target.value)}
            style={{ margin: "5px" }}
            placeholder="paste your code"
          ></textarea>
        </>
      ) : null}

      {content && (
        <div style={{ marginTop: "20px", color: "grey" }}>{content}</div>
      )}

      {responseIsLoading ? <RoxanaLoadingAnimation /> : null}
      {chatGptResponse ? <div>{chatGptResponse}</div> : null}
      {hasError ? <div>error loading data from openai</div> : null}

      <div
        style={{
          width: 400,
          ...textBlock(japaneseThemePalette.FujiSanBlue, 0, 12),
        }}
      >
        {path
          .map((node, index) => <StackTile key={index} name={node} />)
          .reverse()}
      </div>
    </div>
  );
};

export default GraphContainer;
