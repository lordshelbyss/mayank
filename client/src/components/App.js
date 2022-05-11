import Header from './Header';
import QueryDetails from './QueryDetails';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { fetchQueryData } from '../actions';

const App=(props)=>{

    const onSubmit=(values)=>{
        //set action creator for searching db 
        props.fetchQueryData(values.productID);
    }
    return (
        <div>
            <Header/>
            <SearchBar onSubmitCallback={onSubmit}/>
            <QueryDetails/>
        </div>
    );
};

export default connect(null,{fetchQueryData})(App);