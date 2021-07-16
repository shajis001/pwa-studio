import React from 'react';
import { createTestInstance } from '@magento/peregrine';
import { mockShimmer } from '../../Shimmer';
import ShimmerComponent from '../filterModalOpenButton.shimmer';

const mockClassName = 'filterButtonShimmer';
const mockClasses = {
    [mockClassName]: { root_button: 'filterButtonShimmer' }
};

jest.mock('../../Shimmer', () => {
    const mockedShimmer = jest.fn(() => null);

    return {
        __esModule: true,
        default: mockedShimmer,
        mockShimmer: mockedShimmer
    };
});

jest.mock('../../../classify');

let passedProps = {};

const givenDefaultProps = () => {
    passedProps = {};
};

const givenPassedClasses = () => {
    passedProps = {
        classes: mockClasses
    };
};

describe('#FilterModalOpenButton Shimmer', () => {
    beforeEach(() => {
        mockShimmer.mockClear();

        givenDefaultProps();
    });

    test('renders Shimmer component', () => {
        createTestInstance(<ShimmerComponent {...passedProps} />);

        expect(mockShimmer).toHaveBeenCalled();
    });

    test('passes merged class to Shimmer component', () => {
        givenPassedClasses();
        createTestInstance(<ShimmerComponent {...passedProps} />);

        expect(mockShimmer).toHaveBeenCalledWith(
            expect.objectContaining({
                classes: mockClasses[mockClassName]
            }),
            expect.any(Object)
        );
    });
});
