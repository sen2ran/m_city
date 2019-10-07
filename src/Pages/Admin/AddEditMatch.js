import React, {
    Component
} from 'react';
import AdminLayout from '../../Hoc/AdminLayout';

import FormField from '../../Components/ui/formFields'
import {
    validate
} from '../../Components/ui/misc'

import {
    firebaseTeams,
    firebaseDB,
    firebaseMatches
} from '../../firebase'

import { firebaseLooper } from '../../Components/ui/misc'


class AddEditMatch extends Component {

    state = {
        matchId : '',
        formType : 'Edit',
        fromError : false,
        formSuccess : '',
        teams : [],
        formData : {
            date: {
                element: 'input',
                value: '',
                config: {
                    label : 'Event date',
                    name: 'date_input',
                    type: 'date',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel : true,
            },
            local: {
                element: 'select',
                value: '',
                config: {
                    label : 'Select a local team',
                    name: 'select_local',
                    type: 'select',
                    options : []
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel : false,
            },
            resultLocal: {
                element: 'input',
                value: '',
                config: {
                    label : 'Result Local',
                    name: 'result_local_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel : false,
            },
            away: {
                element: 'select',
                value: '',
                config: {
                    label : 'Select a local team',
                    name: 'select_local',
                    type: 'select',
                    options : []
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel : false,
            },
            resultAway: {
                element: 'input',
                value: '',
                config: {
                    label : 'Result Local',
                    name: 'result_local_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel : false,
            },
            referee: {
                element: 'input',
                value: '',
                config: {
                    label : 'Referee',
                    name: 'referee_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel : true,
            },
            stadium: {
                element: 'input',
                value: '',
                config: {
                    label : 'Stadium',
                    name: 'Stadium_input',
                    type: 'text',
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel : true,
            },
            result: {
                element: 'select',
                value: '',
                config: {
                    label : 'Team result',
                    name: 'selecte_result',
                    type: 'select',
                    options : [
                        {key : 'W',value : 'W'},
                        {key : 'L',value : 'L'},
                        {key : 'D',value : 'D'},
                        {key : 'n/a',value : 'n/a'},
                    ]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel : true,
            },
            final: {
                element: 'select',
                value: '',
                config: {
                    label : 'Game played ?',
                    name: 'select_final',
                    type: 'select',
                    options :[
                        {key : 'Yes',value : 'Yes'},
                        {key : 'No',value : 'No'},
                    ] 
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showLabel : true,
            },
        }
    }
updateFields(match, teamOptions, teams, type, matchId) {
    const newFormData = {
        ...this.state.formData
    }

    for (var key in newFormData) {
        if (match) {
            newFormData[key].value = match[key]
            newFormData[key].valid = true
        }
        if (key === 'local' || key === 'away') {
            newFormData[key].config.options = teamOptions
        }
    }

    this.setState({
        matchId: matchId,
        formType: type,
        formData: newFormData,
        teams : teams
    })
}

    componentDidMount(){
        const matchId = this.props.match.params.id

        const getTeam = (match, type) => {
            firebaseTeams.once('value').then(snapshot => {
                const teams = firebaseLooper(snapshot)
                const teamOptions = [];
                snapshot.forEach((childSnapshot) => {
                    teamOptions.push({
                        key: childSnapshot.val().shortName,
                        value: childSnapshot.val().shortName
                    })
                })
                // console.log(teamOptions);
                this.updateFields(match, teamOptions, teams, type, matchId)
            })
        }
        
        if(!matchId){

        }else{
            firebaseDB.ref(`matches/${matchId}`).once('value')
            .then((snapshot) => {
                const match = snapshot.val()
                getTeam(match , 'Edit Match')
            })
        }
    }

    submitForm(event){
        event.preventDefault()
        console.log(this.state);
    }


    updateForm(element){
        const newFormData = {...this.state.formData}
        
        const newElement = {...newFormData[element.id]}
        newElement.value =element.event.target.value

        let valiData = validate(newElement)
        newElement.valid = valiData[0]
        newElement.validationMessage = valiData[1]

        newFormData[element.id] = newElement
        
        // console.log(newFormData);

        this.setState({
            formData : newFormData,
            formError :false
        })
    }


    render() {
        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>Senthuran</h2>
                    <div>
                        <form  onSubmit={(event) => this.submitForm(event)}>
                            <FormField
                                id={'date'}
                                formData={this.state.formData.date}
                                change={(element) => this.updateForm(element)}
                                />

                            <div className="select_team_layout">
                                <div className="label_inputs">
                                    Local
                                </div>
                                <div className="wrapper">
                                    <div className="left">
                                        <FormField
                                            id={'local'}
                                            formData={this.state.formData.local}
                                            change={(element) => this.updateForm(element)}
                                            />
                                    </div>
                                    <div className="right">
                                        <FormField
                                            id={'resultLocal'}
                                            formData={this.state.formData.resultLocal}
                                            change={(element) => this.updateForm(element)}
                                            />
                                    </div>
                                </div>
                            </div> 
                            <div className="select_team_layout">
                                <div className="label_inputs">
                                    Away
                                </div>
                                <div className="wrapper">
                                    <div className="left">
                                        <FormField
                                            id={'away'}
                                            formData={this.state.formData.away}
                                            change={(element) => this.updateForm(element)}
                                            />
                                    </div>
                                    <div className="right">
                                        <FormField
                                            id={'resultAway'}
                                            formData={this.state.formData.resultAway}
                                            change={(element) => this.updateForm(element)}
                                            />
                                    </div>
                                </div>
                            </div>   

                            <div className="split_fields">
                                <FormField
                                    id={'referee'}
                                    formData={this.state.formData.referee}
                                    change={(element) => this.updateForm(element)}
                                    />
                                
                                <FormField
                                    id={'stadium'}
                                    formData={this.state.formData.stadium}
                                    change={(element) => this.updateForm(element)}
                                    />
                            </div> 
                            <div className="split_fields last">
                            <FormField
                                id={'result'}
                                formData={this.state.formData.result}
                                change={(element) => this.updateForm(element)}
                                />
                            
                            <FormField
                                id={'final'}
                                formData={this.state.formData.final}
                                change={(element) => this.updateForm(element)}
                                />
                            </div> 

                            <div className="success_label">{this.state.formSuccess}</div>
                            {
                                this.state.formError ? 
                                    <div className='error_label'>
                                        Something is wrong
                                    </div> 
                                    : ''
                            }
                            <div className='admin_submit'>
                                <button onClick = {(event) => {this.submitForm(event)}}>
                                    {this.state.formType}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AddEditMatch;