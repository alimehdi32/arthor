import { render, screen, fireEvent } from '@testing-library/react';
import { RoadmapDayItem } from '@/components/roadmap/roadmap-day-item';

// Mock Framer Motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

const mockDay = {
  title: "Learn React Hooks",
  durationMins: 60,
  resources: [
    { type: "video", title: "useState Tutorial", url: "#" },
    { type: "book", title: "React Docs", url: "#" },
  ],
  notes: "Focus on understanding state management",
  completed: false,
};

describe('RoadmapDayItem', () => {
  it('renders day information correctly', () => {
    render(
      <RoadmapDayItem 
        day={mockDay}
        isCompleted={false}
        onToggle={jest.fn()}
        onPlay={jest.fn()}
      />
    );

    expect(screen.getByText('Learn React Hooks')).toBeInTheDocument();
    expect(screen.getByText('1h')).toBeInTheDocument();
    expect(screen.getByText('useState Tutorial')).toBeInTheDocument();
    expect(screen.getByText('React Docs')).toBeInTheDocument();
  });

  it('shows completed state when isCompleted is true', () => {
    render(
      <RoadmapDayItem 
        day={mockDay}
        isCompleted={true}
        onToggle={jest.fn()}
        onPlay={jest.fn()}
      />
    );

    // Should show checkmark icon
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onToggle when toggle button is clicked', () => {
    const mockToggle = jest.fn();
    render(
      <RoadmapDayItem 
        day={mockDay}
        isCompleted={false}
        onToggle={mockToggle}
        onPlay={jest.fn()}
      />
    );

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    expect(mockToggle).toHaveBeenCalledWith(mockDay);
  });

  it('calls onPlay when play button is clicked', () => {
    const mockPlay = jest.fn();
    render(
      <RoadmapDayItem 
        day={mockDay}
        isCompleted={false}
        onToggle={jest.fn()}
        onPlay={mockPlay}
      />
    );

    // Find play button (it should be present in the component)
    const playButton = screen.getByRole('button', { name: /play/i });
    fireEvent.click(playButton);
    
    expect(mockPlay).toHaveBeenCalledWith(mockDay);
  });

  it('displays resources correctly', () => {
    render(
      <RoadmapDayItem 
        day={mockDay}
        isCompleted={false}
        onToggle={jest.fn()}
        onPlay={jest.fn()}
      />
    );

    expect(screen.getByText('useState Tutorial')).toBeInTheDocument();
    expect(screen.getByText('React Docs')).toBeInTheDocument();
  });

  it('shows compact view when compact prop is true', () => {
    render(
      <RoadmapDayItem 
        day={mockDay}
        isCompleted={false}
        onToggle={jest.fn()}
        onPlay={jest.fn()}
        compact={true}
      />
    );

    // In compact view, title should have smaller text
    const title = screen.getByText('Learn React Hooks');
    expect(title).toHaveClass('text-sm');
  });
});
