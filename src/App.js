
import './App.css';

import '@aws-amplify/ui-react/styles.css';

import { useState, useEffect } from "react";
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { 
  //listPeople, 
  listBoards 
} from "./graphql/queries"
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { 
  HeaderComponent,
  BoardComponent,
  //BoardComponentCollection,
  PersonComponentCollection 
} from "./ui-components"

import { Board } from './models';

//---


//const content1 = <p>タブ1のコンテンツ</p>
//const content1 = <BoardComponentCollection></BoardComponentCollection>

//const content2 = <p>タブ2のコンテンツ</p>
const content2 = <PersonComponentCollection></PersonComponentCollection>

const content3 = <p>タブ3のコンテンツ</p>
const content4 = <p>タブ4のコンテンツ</p>

function updateTab1_with_DataStore( input, setContent1, doChange ) {
  DataStore.query(Board, Predicates.ALL, {
    sort: ob => ob.name(SortDirection.ASCENDING).createdAt( SortDirection.DESCENDING ),
    page: +input,
    limit: 3
  }).then(
    values => {
      const data = []
      for( let item of values ){
        data.push(
          <BoardComponent board={item} key={item.id}>
          </BoardComponent>
        )
      }      
      setContent1(
        <div>
          <input type="number" className='my-2 form-control' onChange={doChange} ></input>
          {data}
        </div>
      )
    }
  );
}

function updateTab1_with_GraphQL( input, setContent1, doChange ) {
  const option = {
    limit: 3,
    filter: { name: {"eq" : "Crftwr"} }
  };
  API.graphql( graphqlOperation(listBoards, option) ).then(
    values => {
      const data = values.data.listBoards.items;
      const components = []
      for( let item of data ){
        components.push(
          <BoardComponent board={item} key={item.id}/>
        );
      }
      setContent1(
        <div>{components}</div>
      );
    }
  );

  DataStore.query(Board, Predicates.ALL, {
    sort: ob => ob.name(SortDirection.ASCENDING).createdAt( SortDirection.DESCENDING ),
    page: +input,
    limit: 3
  }).then(
    values => {
      const data = []
      for( let item of values ){
        data.push(
          <BoardComponent board={item} key={item.id}>
          </BoardComponent>
        )
      }      
      setContent1(
        <div>
          <input type="number" className='my-2 form-control' onChange={doChange} ></input>
          {data}
        </div>
      )
    }
  );
}


function updateTab1_with_RestApi( input, setContent1, doChange ) {

  API.get( "api60ee79cf", "/gateevent" ).then(
    response => {
      console.log( response );
      setContent1(
        <div>
          <p>{response}</p>
        </div>
      )    
    }
  );
}

//const updateTab1 = updateTab1_with_DataStore;
//const updateTab1 = updateTab1_with_GraphQL;
const updateTab1 = updateTab1_with_RestApi;

function App() {

  const [content1, setContent1] = useState("");
  const [input, setInput] = useState(0);
  //const [find, setFind] = useState(input);

  function doChange(e) {
    setInput( +e.target.value );
  }

  /*
  function doFilter(e) {
    setFind( input );
  }
  */

  useEffect(
    () => {
      updateTab1( input, setContent1, doChange );
    }, [input]
  )

  return (
    <div>
      <HeaderComponent className="my-4"/>
      <p>これはUI Componentを使った表示です</p>

      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a href="#tab1" className="nav-link active" data-bs-toggle="tab">List</a>
        </li>
        <li className='nav-item'>
          <a href="#tab2" className="nav-link" data-bs-toggle="tab">Create</a>
        </li>
        <li className='nav-item'>
          <a href="#tab3" className="nav-link" data-bs-toggle="tab">Update</a>
        </li>
        <li className='nav-item'>
          <a href="#tab4" className="nav-link" data-bs-toggle="tab">Delete</a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="tab1" className='my-2 tab-pane active'>
          {content1}
        </div>
        <div id="tab2" className='my-2 tab-pane'>
          {content2}
        </div>
        <div id="tab3" className='my-2 tab-pane'>
          {content3}
        </div>
        <div id="tab4" className='my-2 tab-pane'>
          {content4}
        </div>
      </div>

      <p>
        <a className='btn btn-primary' href="." onClick={Auth.signOut}>
          Sign Out
        </a>
      </p>

    </div>
  );
}


export default withAuthenticator(App);
