import * as React from 'react';
import CreateNote from './note-templates/CreateNote';
import EditNote from './note-templates/EditNote';

class SingleNote extends React.Component<any>{
    props: {
        match:{
            params: {
                note: string,
                id: string
            }
        }
    };

    createOrEdit() {
      if (this.props.match.params.note === 'create-note') {
          return (<CreateNote/>);
      } else {
          return(<EditNote id={this.props.match.params.id}/>);
      }
    }

    render() {
        this.createOrEdit();
        return(
            <div>
                {this.createOrEdit()}
            </div>
        );
    }
}

export default SingleNote;