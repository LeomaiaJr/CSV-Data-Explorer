import { render, screen, fireEvent } from '@testing-library/react';
import ThemeSelector from './ThemeSelector';
import { AppThemeProvider } from '../../providers/ThemeProvider';
import { vi } from 'vitest';

describe('ThemeSelector', () => {
  ['light', 'dark'].forEach((theme) => {
    it('check if the correct theme is checked based on window preferences', () => {
      mockStartTheme(theme as 'light' | 'dark');
      render(
        <AppThemeProvider>
          <ThemeSelector />
        </AppThemeProvider>
      );

      const toggleButton = screen.getByRole(theme);
      expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
    });

    it('set correct theme value when toggled', () => {
      mockStartTheme(theme as 'light' | 'dark');
      render(
        <AppThemeProvider>
          <ThemeSelector />
        </AppThemeProvider>
      );

      const toggleButton = screen.getByRole(theme);
      fireEvent.click(toggleButton);

      expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
    });
  });
});

const mockStartTheme = (theme: 'light' | 'dark') => {
  Object.defineProperty(window, 'matchMedia', {
    value: vi.fn(() => {
      return {
        matches: theme === 'dark',
      };
    }),
  });
};
