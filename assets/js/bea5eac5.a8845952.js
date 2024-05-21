"use strict";(self.webpackChunkvector_search_workshop=self.webpackChunkvector_search_workshop||[]).push([[415],{5905:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var s=o(5893),r=o(1151);const n={},a="\ud83d\udcd8 What Are Vectors?",c={id:"vector-search/what-are-vector",title:"\ud83d\udcd8 What Are Vectors?",description:"Simply put, a vector is a list of numbers. For example, a vector of length 3 could be [1, 2, 3]. A vector of length 5 could be [1, 2, 3, 4, 5]. A vector of length 100 could be [1, 2, 3, 4, 5, ..., 100]. The length of a vector is the number of elements it contains.",source:"@site/docs/5-vector-search/2-what-are-vector.mdx",sourceDirName:"5-vector-search",slug:"/vector-search/what-are-vector",permalink:"/vector-search-workshop/docs/vector-search/what-are-vector",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/vector-search-workshop/blob/main/docs/5-vector-search/2-what-are-vector.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Semantic Search",permalink:"/vector-search-workshop/docs/vector-search/semantic-search"},next:{title:"\ud83d\udcd8 Implementing Vector Search",permalink:"/vector-search-workshop/docs/vector-search/implementing-vector-search"}},i={},h=[{value:"Why Do We Need Vectors?",id:"why-do-we-need-vectors",level:2},{value:"How Do We Create Vectors?",id:"how-do-we-create-vectors",level:2}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"-what-are-vectors",children:"\ud83d\udcd8 What Are Vectors?"}),"\n",(0,s.jsx)(t.p,{children:"Simply put, a vector is a list of numbers. For example, a vector of length 3 could be [1, 2, 3]. A vector of length 5 could be [1, 2, 3, 4, 5]. A vector of length 100 could be [1, 2, 3, 4, 5, ..., 100]. The length of a vector is the number of elements it contains."}),"\n",(0,s.jsx)(t.p,{children:"In AI, vectors are a mathematical representation of data."}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"When it comes to GenAI, you will hear about vectors and embeddings. While they don't convey the exact meaning, you will often see the terms used interchangeably."}),(0,s.jsx)(t.p,{children:"Technically, an embedding is a vector that has been created by a model. For example, a model could convert a word into a vector. The vector would be the embedding for that word."})]}),"\n",(0,s.jsx)(t.p,{children:"Thanks to some of the latest advances in AI, we can now use vectors to represent words, sentences, paragraphs, and even entire documents. This is a huge breakthrough because it allows us to use AI to understand the meaning of text."}),"\n",(0,s.jsx)(t.p,{children:"Vectors can even be used to represent images, audio, and video, but we'll focus on text in this workshop."}),"\n",(0,s.jsx)(t.h2,{id:"why-do-we-need-vectors",children:"Why Do We Need Vectors?"}),"\n",(0,s.jsx)(t.p,{children:"Computers can't understand text. They can only understand numbers. So, we need a way to convert text into numbers. That's where vectors come in."}),"\n",(0,s.jsx)(t.p,{children:"Using vectors, we can plot text in a multi-dimensional space. It is hard to visualize a multi-dimensional space, so let's start with a 2-dimensional space."}),"\n",(0,s.jsx)(t.p,{children:"Imagine a plot with a x and y axis. Our ML model will plot various points on this plot. This could represent words, sentences, paragraphs, documents, or even images."}),"\n",(0,s.jsx)(t.p,{children:"The position where the points are plotted is determined by the model you used. The models converts the data you passed it into a vector. Then, it plots the vector on the chart."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Points on a chart",src:o(1597).Z+"",width:"1702",height:"1330"})}),"\n",(0,s.jsx)(t.p,{children:"When doing a search, we will create a new vector for the search term. We then plot this new vector on the chart."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Search term on a chart",src:o(9583).Z+"",width:"1702",height:"1330"})}),"\n",(0,s.jsx)(t.p,{children:"Then, we will find the closest words to the search term. The closest words will be the words that are plotted closest to the search term."}),"\n",(0,s.jsx)(t.p,{children:"The closest term will depend on the algorithm you use to calculate the distance between vectors. Using Euclidian distance, the closest words will be the words that are closest to the search term."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Closest words",src:o(1581).Z+"",width:"1702",height:"1388"})}),"\n",(0,s.jsx)(t.p,{children:"Vector search also provides a cosine algorithm. Using cosine distance, the closest words will be the words that are closest to the search term, but in the same direction."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Closest words",src:o(8491).Z+"",width:"1702",height:"1388"})}),"\n",(0,s.jsx)(t.h2,{id:"how-do-we-create-vectors",children:"How Do We Create Vectors?"}),"\n",(0,s.jsx)(t.p,{children:"The big breakthrough with GenAI is that developers can now easily use models that have been pre-trained, and made available freely online. These models have been trained on huge datasets, and are able to convert text (or any sort of data, really) into vectors."}),"\n",(0,s.jsx)(t.p,{children:"There are many ways to create vectors. In this workshop, we'll use our OpenAI API to create vectors for us."})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1597:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/1-vectors-dd6b881c393ab10e2b38df3c01a87aa7.png"},9583:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/2-vector-query-629d04e7529c2442cf3fe9613b9de3cd.png"},1581:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/3-euclidean-e20e84c0a07375a9fa804d6e9e2ecfca.png"},8491:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/4-cosine-13e38983d440beb1534327ef58af8f2b.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>a});var s=o(7294);const r={},n=s.createContext(r);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);