import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { PopConfirmComponent } from '../projects/ion/src/lib/popconfirm/popconfirm.component';
import {
  AlertComponent,
  BadgeComponent,
  ButtonComponent,
  DropdownComponent,
  IonDividerComponent,
  IonIconComponent,
} from '../projects/ion/src/public-api';

export default {
  title: 'Ion/Data Display/PopConfirm',
  component: PopConfirmComponent,
} as Meta;

const Template: Story<PopConfirmComponent> = (args: PopConfirmComponent) => ({
  component: PopConfirmComponent,
  props: args,
  moduleMetadata: {
    declarations: [
      IonDividerComponent,
      ButtonComponent,
      IonIconComponent,
      BadgeComponent,
      DropdownComponent,
      AlertComponent,
    ],
    imports: [CommonModule],
  },
});

export const Default = Template.bind({});
Default.args = {
  ionPopConfirmTitle: 'Você tem certeza?',
};

export const withDescription = Template.bind({});
withDescription.args = {
  ionPopConfirmTitle: 'Você tem certeza?',
  ionPopConfirmDesc:
    'Ao concluir essa ação as ordens de serviço alocadas para o recurso ficarão órfãs.',
};
