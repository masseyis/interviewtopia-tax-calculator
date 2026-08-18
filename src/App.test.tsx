import { render, screen } from '@testing-library/react'
import App from './App'

describe('starter application', () => {
  it('renders the exercise heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Interviewtopia Tax Calculator',
      }),
    ).toBeInTheDocument()
  })
})
