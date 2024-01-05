import { useEffect, useState } from "react";

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
    <div style={{ marginLeft: "20px" }}>
      <button
        onClick={() => onNodeSelect(node, isLeafNode)}
        style={{
          margin: "5px",
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

export const MohyMap = () => {
  const [root, setRoot] = useState({
    name: "Root",
    children: mapImage,
    isSelected: true,
  });
  const [path, setPath] = useState(["Root"]);
  const [content, setContent] = useState("");

  const handleNodeSelect = (node, isLeafNode) => {
    setPath((prevPath) => [...prevPath, node.name]);
    setRoot({ name: node.name, children: node.children, isSelected: true });

    if (isLeafNode) {
      setContent(
        node.content === "" ? "Data about your algorithm" : node.content
      );
    } else {
      setContent("");
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

  return (
    <div>
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
      <button onClick={handleRestart} style={{ margin: "5px" }}>
        Restart
      </button>
      {content && (
        <div style={{ marginTop: "20px", color: "grey" }}>{content}</div>
      )}
    </div>
  );
};
