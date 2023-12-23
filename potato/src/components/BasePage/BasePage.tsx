import { Box, Snackbar, Alert } from "@mui/material";
import { ReactNode } from "react";
import useAlert from "../../hook/useAlert";


interface BasePageProps {
	readonly alert: ReturnType<typeof useAlert>;
	readonly children: ReactNode;
}

export function BasePage(props: BasePageProps) {
	const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		props.alert.setIsOpen(false);
	};

	return (
		<Box mb={8} height={"100%"}>
            {props.children}
			<Snackbar
				open={props.alert.isOpen}
				anchorOrigin={{
					horizontal: 'right',
					vertical: 'bottom',
				}}
				autoHideDuration={10000}
				onClose={handleClose}
			>
				<Alert variant='outlined' severity={props.alert.severity} onClose={handleClose}>
					{props.alert.message || 'snackbar'}
				</Alert>
			</Snackbar>
		</Box>
	);
}

export default BasePage;