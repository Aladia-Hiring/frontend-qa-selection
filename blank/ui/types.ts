export type FormSubmitEvent = Event & {
    target: HTMLFormElement;
    preventDefault: () => void;
  };