import React from "react";
import Turn from "../../models/Turn";
import Player from "../../constants/Player";
import ActionDropdown from "./ActionDropdown";
import HiddenCheckbox from "./HiddenCheckbox";
import ExclusivityDropdown from "./ExclusivityDropdown";
import ParallelCheckbox from "./ParallelCheckbox";

interface Props {
    turn: Turn,
    player: Player,
    index: number
}

class PlayerTurnSettings extends React.Component<Props, object> {
    render() {
        if (this.props.turn.player !== this.props.player) {
            return null;
        }
        if (this.props.turn.player === Player.NONE) {
            return <div>
                <ActionDropdown turn={this.props.turn} index={this.props.index}/>
            </div>;
        }
        return <div>
            <div>
                <ActionDropdown turn={this.props.turn} index={this.props.index}/>
                <ExclusivityDropdown turn={this.props.turn} index={this.props.index}/>
            </div>
            <div>
                <HiddenCheckbox turn={this.props.turn} index={this.props.index}/>
                <ParallelCheckbox turn={this.props.turn} index={this.props.index}/>
            </div>
        </div>;
    }
}

export default PlayerTurnSettings;