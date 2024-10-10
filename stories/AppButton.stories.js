import AppButton from  '~/components/atoms/AppButton.vue';

export default {
  title: 'Components/AppButton',
  component: AppButton,
};

export const Default = {
  args: {
    label: 'AppButton',
    backgroundColor: '#f00', // Default button color (red)
    textAlign: 'center',     // Default text alignment (center)
  },
};
export const Primary = {

    args: {
      background: '#ff0',
      label: 'PRIMARY',
    },
  };
  
  export const Secondary = {
 
    args: {
      backgroundColor:'#000',
      label: '😄👍😍💯',
    },
  };
  
  export const Tertiary = {
  
    args: {
      backgroundColor:"#222",
      label: '📚📕📈🤓',
    },
  };
