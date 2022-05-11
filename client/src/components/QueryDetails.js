import { connect } from "react-redux";

const QueryDetails = (props) => {
  const renderData = () => {
    if (props.data && props.data.length) {
      return props.data.map((doc) => {
        return (
          <div class="row" key={doc._id}>
            <div class="col s12">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{doc.UniProt_ID}</span>
                  <p><strong>Modifications: </strong> {doc.Modifications}</p>
                  <p><strong>Sequences: </strong> {doc.sequences}</p>
                  <p><strong>Res: </strong> {doc.res}</p>
                </div>
                <div class="card-action">
                 
                </div>
              </div>
            </div>
          </div>
        );
      });
    }else if(props.data && !props.data.length){
        return <div style={{textAlign:"center"}}>No results found</div>
    }
  };

  return <div className="container" style={{marginTop:"20px"}}>{renderData()}</div>;
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps)(QueryDetails);
