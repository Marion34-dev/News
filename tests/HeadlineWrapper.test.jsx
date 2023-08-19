import { render, screen } from '@testing-library/react';
import HeadlineWrapper from './src/Components/HeadlineWrapper.jsx';
import mockApiResponse from 'mockNewsData.json';

describe('Testing headlineWrapper', () => {
       
  it('should return 1 array', () => {
    //Arrange
    const mockData = mockApiResponse;
    // Act      
    render(<HeadlineWrapper news={mockData.mockApiResponse.response.results} />)
    const articles = screen.getAllByRole(`article`);
    // Assert
    expect(articles.length).toBe(1);
  })
});
