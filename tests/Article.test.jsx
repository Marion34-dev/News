import { render, fireEvent } from '@testing-library/react';
import Article from './src/Components/Article.jsx';

describe('Testing the Article Component', () => {

  it('should display the bodyText section when the button is clicked', () => {
    // Arrange
    const mockArticleData = {
      thumbnail: 'this is the thumbnail',
      title: 'Test Article',
      body: 'This is the body of the article.',
      webUrl: 'https://example.com/article',
    };
      
    // Act      
    const { getByText, queryByText } = render(<Article news={mockArticleData} />);

    // Assert
    // bodyText should not be visible at first
    expect(queryByText(mockArticleData.body)).not.toBeInTheDocument();

    // Find the "More info" button and click it
    const button = getByText('More info');
    fireEvent.click(button);

    // Now, the bodyText should be visible
    expect(getByText(mockArticleData.body)).toBeInTheDocument();

    // Click the button again and check that the bodyText is hidden again
    fireEvent.click(button);
    expect(queryByText(mockArticleData.body)).not.toBeInTheDocument();
  });
});
