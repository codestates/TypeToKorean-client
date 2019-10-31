import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';

class ScoreDiv extends React.Component {
    render() {
        return (
        <article class="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <Row gutter={16}>
            <Col div={12}>
                <Statistic title="Score" value={10414} />
            </Col>
            <Col div={12}>
                <Statistic title="Gain" value={5227} precision={0} />
                {/*<Button style={{ marginTop: 16 }} type="primary">
                    Recharge
                </Button>*/}
            </Col>
        </Row>
        </article>
        )
    }
}

export default ScoreDiv;