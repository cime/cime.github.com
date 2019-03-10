import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

/** @type {{thumbnail: React.CSSProperties}} */
const style = {
    thumbnail: {
        float: 'left',
        maxHeight: 190
    }
} as any;

export class Projects extends Component {
    state = { repositories: [] }
    componentWillMount() {
        fetch('https://api.github.com/users/cime/repos').then((response) => response.json()).then((repositories) => {
            this.setState((state) => ({...state, repositories: repositories.filter((x: any) => !x.fork)}))
        });
    }

    renderRepositories() {
        return <div className="list-group">
            {
                this.state.repositories.map((repo: any) => <a href={repo.html_url} target="_blank" title={repo.name + ' - ' + repo.description} className="list-group-item list-group-item-action" key={repo.id}>
                    <h5 className="mb-1">{repo.name}</h5>
                    <p className="mb-1">{repo.description}</p>
                    <small>Language: <strong>{repo.language}</strong></small>
                </a>)
            }
        </div>
    }

    render() {
        return <>
            <Row>
                <Col>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h2>Battleship <small>(<a href="https://play.google.com/store/apps/details?id=com.twodlevel.games.battleship">Google Play</a>)</small></h2>
                            <img className="thumbnail" style={style.thumbnail} src="https://lh4.ggpht.com/FaesskxiQ6FxWpJuGZkpdZ10vSq9yjYuc-oRYdfGzXVJKJ0x7srIw2l_3Z4pJNVhFJA=h310-rw" alt="Screenshot" />
                            <p>Battleship (also Battleships or Sea Battle) is a classic board game for two players.</p>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h2>Flappy Maca <small>(<a href="https://play.google.com/store/apps/details?id=com.twodlevel.flappymaca">Google Play</a>)</small></h2>
                            <img className="thumbnail" style={style.thumbnail} src="https://lh3.googleusercontent.com/zlwXUUtneFX5Pz_KkvzhpZ9SWlWIg6Q22p4qThETidHt6dEd0twYkziwPTOwDAxT1sDx=h310-rw" alt="Screenshot" />
                            <p>Flappy Maca is a simple arcade game where you fly through obstacles.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h2>TicTacToe <small>(<a href="https://play.google.com/store/apps/details?id=net.specialec.tictactoe">Google Play</a>)</small></h2>
                            <img className="thumbnail" style={style.thumbnail} src="https://lh4.ggpht.com/g0rwabrEvheLyK9CEuyk57k5yDcYt5u1b3NHFtBiqtDvV_sFCZvEv_v_LlNRZFwQRxKq=h310-rw" alt="Screenshot" />
                            <p>Tic-tac-toe (or Noughts and crosses, Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal row wins the game.</p>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <h2>Compass <small>(<a href="https://play.google.com/store/apps/details?id=com.twodlevel.compass">Google Play</a>)</small></h2>
                            <img className="thumbnail" style={style.thumbnail} src="https://lh5.ggpht.com/NBir7lEwYc2dgrWSKI3L19Kyrdcr349nshZrwpvsBiEdyjvEnu-tOGDCypHf08HbaHcz=h900-rw" alt="Screenshot" />
                            <p>A compass is a navigational instrument that shows directions in a frame of reference that is stationary relative to the surface of the Earth. The frame of reference defines the four cardinal directions (or points) - north, south, east, and west. Intermediate directions are also defined.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h2><i className="fab fa-github"></i> Github</h2>

                    { this.state.repositories && this.renderRepositories() }
                </Col>
            </Row>
        </>;
    }
}
