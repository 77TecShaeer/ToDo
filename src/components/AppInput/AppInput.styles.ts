import { StyleSheet } from 'react-native';
import { AppColors } from '../../utils/AppColors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/ScreenUtils';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: AppColors.ultraLightGray, width: SCREEN_WIDTH * 0.9, borderRadius: 4,
    height: SCREEN_HEIGHT * 0.06
  },
  label: {
    marginVertical: 4, color: AppColors.primary
  },
  error: {
    marginVertical: 4, color: AppColors.error
  }
});
