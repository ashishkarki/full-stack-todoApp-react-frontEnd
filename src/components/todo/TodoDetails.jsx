import React, { Component } from "react";
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import logger from '../../global-functions'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'

class TodoDetailsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: 'Learn something',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount() {
        // don't load stuff if this is a create request with id = -1
        if (this.state.id === -1) return

        const username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveTodoWithUsernameAndTodoId(username, this.state.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                })
            })
    }

    onSubmit = (values) => {
        logger('from onSubmit')

        const username = AuthenticationService.getLoggedInUsername()
        const id = this.state.id
        const tempTodo = {
            id: id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (id === -1) {
            // this  is a create new todo request
            TodoDataService.createTodo(username, tempTodo)
                .then(() => {
                    this.props.history.push('/todos')
                })
        } else {
            TodoDataService.updateTodo(username, id, tempTodo)
                .then(() => {
                    this.props.history.push('/todos')
                })
        }
    }

    validate = (values) => {
        logger('from validate')
        let errors = {}

        if (!values.description) {
            errors.description = 'Please enter a description'
        } else if (values.description.length < 5) {
            errors.description = 'Please enter at least 5 characters for description'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Please enter a valid target date'
        }

        return errors
    }

    render() {
        // JS destructuring feature: values from state object are assigned to 
        // variables on the left hand side that have the same name as the properties
        // of the this.state object
        const { description, targetDate } = this.state
        // const tempTargetDate = this.state.targetDate

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{
                            // description: description,
                            // targetDate: targetDate
                            // since, left and right values are same, we can just use one name
                            description, targetDate
                        }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnChange={false} //can be omitted for default true
                        validateOnBlur={true} //can be omitted for default true
                        enableReinitialize={true} // enables refreshing of form with new data
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoDetailsComponent