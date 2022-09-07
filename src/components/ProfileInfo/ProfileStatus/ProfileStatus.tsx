import React, {ChangeEvent, Component} from 'react';


export type ProfileStatusStateType = {
    editMode:boolean
    status:string
}

export type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends Component<ProfileStatusType> {
    state:ProfileStatusStateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log(this.props.status)

        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<ProfileStatusStateType>, snapshot?: ProfileStatusType) {
        console.log(prevState)
        if(prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status})
        }

    }

    render() {
        return (
            <>{!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                </div>
            }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                               value={this.state.status}></input>
                    </div>
                }
            </>
        )
    }
}