import React from 'react';

import { Card, Heading } from './styled';

const SubCard = ({heading,data}) => (
    <Card>
        <Heading>
            {heading}
        </Heading>
        <p>
            {data}
        </p>
    </Card>
)

export default SubCard;