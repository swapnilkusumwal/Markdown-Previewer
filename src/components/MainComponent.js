import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import marked from 'marked';
const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load
- BONUS: Use &lt;br&gt; for line breaks


\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

> “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
― Marcus Aurelius, Meditations 

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)

Coded by **Swapnil**, [Github](https://www.github.com/swapnilkusumwal)
`;

// Line breaks allowed 
marked.setOptions({
  breaks: true,
});

// Line breaks allowed 
marked.setOptions({
  breaks: true,
});

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            data:defaultMarkdown
        };
        this.handleChange=this.handleChange.bind(this);
        this.rawMarkup=this.rawMarkup.bind(this);
    }
    
    handleChange=(event)=>{
        this.setState({data:event.target.value});
    }
    rawMarkup=()=>{
        const rawMarkup=marked(this.state.data,{sanitize:true});
        return {__html:rawMarkup};
    }
    render() {
        return (
            <div style={{backgroundImage: "url(https://i.postimg.cc/3xpfQV5s/noise-bg.png)",
                backgroundPosition: 'center',backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',width:"100%"}}
                className="container-fluid"
                >
                <div className="row">
                    <h1 className="col-12" style={{fontFamily:'monospace',flex:1,fontSize:'4.5rem',textShadow:'5px 5px #333',color:'#eee',textAlign:'center'}} >Markdown Previewer</h1>
                </div>
                <div className="row" style={{fontFamily: 'Molengo',display:'flex',justifyContent:'center'}}>
                    <div className="col-12 col-lg-6" style={{width:'50vw',height:'90vh',display:'flex',justifyContent:'center'}}>
                        <textarea id="editor" value={this.state.data}
                            style={{height:'80vh',width:'80%',marginTop:35}}
                            onChange={this.handleChange}/>
                    </div>
                    <div className="col-12 col-lg-6 text-center" style={{placeItems:'center',display:'flex',justifyContent:'center'}} >
                        <div id="preview" style={{background: '#333',color: 'white',
                            width:'80%'}} dangerouslySetInnerHTML={this.rawMarkup()}/>  
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default MainComponent;