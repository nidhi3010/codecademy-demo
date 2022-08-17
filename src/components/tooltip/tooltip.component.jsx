import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { FiAlertCircle } from 'react-icons/fi';
export default function ToolTip() {
  return (
    <Tooltip title="Add" arrow>
      <Button><FiAlertCircle /></Button>
    </Tooltip>
  );
}
