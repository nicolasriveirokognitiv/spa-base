import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay';
import PageColumn from './PageColumn';
import PageRow from './PageRow';
import PageGrid from './PageGrid';

function Layout({ page, mode }) {
    return (
        <PageGrid {...page}>
            {
                (row, i) => (
                    <PageRow {...row} key={i}>
                        {
                            (column, j) => (
                                <PageColumn {...column} key={j}>
                                    {
                                        (block, k) => <Overlay {...block} key={k} mode={mode} />
                                    }
                                </PageColumn>
                            )}
                    </PageRow>
                )}
        </PageGrid>
    );
}

Layout.propTypes = {
    page : PropTypes.shape({}).isRequired,
    mode : PropTypes.string.isRequired,
};

export default Layout;
