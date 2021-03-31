import { Component } from "react";

class ErrorBoundary extends Component{
     state = {
        haserror:false,
        error_msg:''

    }
    componentDidCatch = (error,errorinfo) => {
        this.setState({haserror:true,error_msg = errorinfo})
    }
    render(){
        return <h1>{this.state.error_msg}</h1>
    }
}