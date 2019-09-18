import React, {Component} from 'react';

class Course extends Component{

    static defaultProps ={
        course: {},
        onRemove: ()=> {}
    }

    remove(){
        this.props.onRemove(this.props.course.id);
    }

    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
    }

    render(){
        const {props} = this,
            {course} = props;

        return(
            <li className="course">
                <div>{course.category}</div>
                <button onClick={this.remove}>X</button>
                <img src={course.image}></img>
                <div>{course.name}</div>
            </li>
        )
    }
}

export default Course;