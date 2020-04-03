import React, { Component } from "react";
import env from "./components/enviroment/Enviroment"
import axios from "axios";
import './app.css'


import Grid from "./components/layout/Grid"
import Loader from "./components/layout/Loader"
import End from "./components/layout/End"
import Header from './components/layout/Header'



class App extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[],
            nextBatch: [],
            loading: false,
            loader: false,
            page:1,
            prevY:0,
            total: 300,
            length: null,
            sort: null,
            usedIndex: [],
            showSort: false,
            showEnd: false,
        }
    }

    // Fetching API on page load
    componentDidMount(){
        // Initial fetch
        this.getData(this.state.page, this.state.sort);
       
        //Observer options
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };

        // new Observer
        this.observer = new IntersectionObserver(this.handleObserver.bind(this),options);
        this.observer.observe(this.loadingRef);

    }

    // Initial load fetch function 
    getData(page, sort){
        this.setState({loader: true, showEnd: false})
        axios.get(`${this.baseUrl}/products?_sort=${sort}&_page=${page}&_limit=20`)
        .then(res => {
            this.setState({products: [...this.state.products, ...res.data]});
            this.setState({loader: false})
        })
    }

    //Chekc items for 20 products passed
    adCheck = [{adCheck: true}]

    // Fetching next batch data
    getNextBatch(page, sort){
        axios.get(`${this.baseUrl}/products?_sort=${sort}&_page=${page}&_limit=20`)
        .then(res => {
            this.setState({nextBatch: this.adCheck})
            this.setState({nextBatch: [...this.state.nextBatch, ...res.data]});
        })
    }

    // Merging old data and new batch data
    concatData(){
        this.setState({products: [...this.state.products, ...this.state.nextBatch]})
    }

    // Sort function
    handleSort = (sort) =>{
        this.setState({loader: true})
        this.setState({showEnd: false})
        axios.get(`${this.baseUrl}/products?_sort=${sort}&_page=1&_limit=20`)
        .then(res =>{
            this.setState({products: res.data})
            this.setState({loader: false})
        })
        this.setState({sort: sort})
        this.getNextBatch(this.state.page + 1, this.state.sort)
    }

    // Observing scroll distance for the infinite load and calling next batch and merge funcion 
    handleObserver(entities){
        const y = entities[0].boundingClientRect.y; 
        this.getNextBatch(this.state.page + 1, this.state.sort)
        if(this.state.prevY > y){ 
            if(this.state.products.length < this.state.total){
                this.setState({page: this.state.page + 1})    
                this.concatData()
            }else{
                this.setState({showEnd: true})    
            }            
        }
        this.setState({prevY: y});    
    }   
    
    // Cheking for the idnex of the ad image
    usedIndex = []         
    indexVerifier = () =>{
        const newIndex=Math.floor(Math.random()*1000);
         if(this.usedIndex.includes(newIndex)){
             return this.indexVerifier()
         }else{
            this.usedIndex.push(newIndex)
            return newIndex
            }
        }

    baseUrl = env.baseUrl

    render() {
            

            const grid = this.state.loader ? <Loader /> :   <div className="main__holder">
                                                                <Grid generateIndex={this.indexVerifier} state={this.state} baseUrl={this.baseUrl}/>
                                                            </div> 
            return (
            <React.Fragment>     
                    {!this.state.loader && <Header clicked={this.handleSort} generateIndex={this.indexVerifier} baseUrl={this.baseUrl}/>}
                    {grid}  
                    {!this.state.loader && this.state.showEnd ? <End /> : ""}
                    <div ref={loadingRef => (this.loadingRef = loadingRef)}></div>                 
            </React.Fragment>
        )
    }
}


export default App