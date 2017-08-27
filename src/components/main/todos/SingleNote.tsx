import * as React from 'react';
import CreateNote from './note-templates/CreateNote';

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
        console.log(this.props);
      if (this.props.match.params.note === 'create-note') {
          return (<CreateNote/>);
      } else {
          return(<h2>Edit</h2>);
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