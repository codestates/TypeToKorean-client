import React from 'react';
import { Statistic, Row, Col, Button } from 'antd';

class TypoDiv extends React.Component {
    render() {
        return (
        <article class="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
        <Row gutter={16}>
            <Col div={12}>
                <Statistic title="Errors" value={1} />
            </Col>
            <Col div={12}>
                <Statistic title="Gain" value={-2} precision={2} />
                {/*<Button style={{ marginTop: 16 }} type="primary">
                    Recharge
                </Button>*/}
            </Col>
        </Row>
        </article>
        )
    }
}

export default TypoDiv;