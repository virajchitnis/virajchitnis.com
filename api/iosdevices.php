<?php
// Array of devices supported by iOS 8.
$all_devices = array(
	"iPhone4,1" => array(
		"cpu" => "Apple A5 @ 800 MHz",
		"cpu_cores" => 2,
		"arch" => "ARM Cortex A9 32-bit",
		"gpu" => "PowerVR SGX543MP2 @ 200 MHz",
		"gpu_cores" => 2,
		"memory" => "512 MB",
		"wifi" => "802.11 b/g/n",
		"bluetooth" => "4.0",
		"sim" => "Micro-SIM",
		"power" => "3.7 V 5.3 W·h (1,432 mA·h)",
		"camera_mp" => "8 MP",
		"response" => true,
	),
	"iPhone5,1" => array(
		"cpu" => "Apple A6 @ 1.3 GHz",
		"cpu_cores" => 2,
		"arch" => "ARMv7s 32-bit",
		"gpu" => "PowerVR SGX543MP3 @ 266 MHz",
		"gpu_cores" => 3,
		"memory" => "1 GB",
		"wifi" => "802.11 a/b/g/n",
		"bluetooth" => "4.0",
		"sim" => "Nano-SIM",
		"power" => "3.8 V 5.45 W·h (1,440 mA·h)",
		"camera_mp" => "8 MP",
		"response" => true,
	),
	"iPhone5,2" => array(
		"cpu" => "Apple A6 @ 1.3 GHz",
		"cpu_cores" => 2,
		"arch" => "ARMv7s 32-bit",
		"gpu" => "PowerVR SGX543MP3 @ 266 MHz",
		"gpu_cores" => 3,
		"memory" => "1 GB",
		"wifi" => "802.11 a/b/g/n",
		"bluetooth" => "4.0",
		"sim" => "Nano-SIM",
		"power" => "3.8 V 5.45 W·h (1,440 mA·h)",
		"camera_mp" => "8 MP",
		"response" => true,
	),
	"iPhone5,3" => array(
		"cpu" => "Apple A6 @ 1.3 GHz",
		"cpu_cores" => 2,
		"arch" => "ARMv7s 32-bit",
		"gpu" => "PowerVR SGX543MP3 @ 266 MHz",
		"gpu_cores" => 3,
		"memory" => "1 GB",
		"wifi" => "802.11 a/b/g/n",
		"bluetooth" => "4.0",
		"sim" => "Nano-SIM",
		"power" => "3.8 V 5.73 W·h (1,507 mA·h)",
		"camera_mp" => "8 MP",
		"response" => true,
	),
	"iPhone5,4" => array(
		"cpu" => "Apple A6 @ 1.3 GHz",
		"cpu_cores" => 2,
		"arch" => "ARMv7s 32-bit",
		"gpu" => "PowerVR SGX543MP3 @ 266 MHz",
		"gpu_cores" => 3,
		"memory" => "1 GB",
		"wifi" => "802.11 a/b/g/n",
		"bluetooth" => "4.0",
		"sim" => "Nano-SIM",
		"power" => "3.8 V 5.73 W·h (1,507 mA·h)",
		"camera_mp" => "8 MP",
		"response" => true,
	),
	"iPhone6,1" => array(
		"cpu" => "Apple A7 @ 1.3 GHz",
		"cpu_cores" => 2,
		"arch" => "ARMv8-A 64-bit",
		"gpu" => "PowerVR G6430",
		"gpu_cores" => 4,
		"memory" => "1 GB",
		"wifi" => "802.11 a/b/g/n",
		"bluetooth" => "4.0",
		"sim" => "Nano-SIM",
		"power" => "3.8 V 5.96 W·h (1,570 mA·h)",
		"camera_mp" => "8 MP",
		"response" => true,
	),
	"iPhone6,2" => array(
		"cpu" => "Apple A7 @ 1.3 GHz",
		"cpu_cores" => 2,
		"arch" => "ARMv8-A 64-bit",
		"gpu" => "PowerVR G6430",
		"gpu_cores" => 4,
		"memory" => "1 GB",
		"wifi" => "802.11 a/b/g/n",
		"bluetooth" => "4.0",
		"sim" => "Nano-SIM",
		"power" => "3.8 V 5.96 W·h (1,570 mA·h)",
		"camera_mp" => "8 MP",
		"response" => true,
	),
	"iPhone7,1" => array(
		"cpu" => "Apple A8 @ 1.4 GHz",
		"cpu_cores" => 2,
		"arch" => "ARMv8-A 64-bit",
		"gpu" => "PowerVR G6450",
		"gpu_cores" => 4,
		"memory" => "1 GB",
		"wifi" => "802.11 a/b/g/n/ac",
		"bluetooth" => "4.0",
		"sim" => "Nano-SIM",
		"power" => "3.82 V 6.91 W·h (1,810 mA·h)",
		"camera_mp" => "8 MP",
		"response" => true,
	),
	"iPhone7,2" => array(
		"cpu" => "Apple A8 @ 1.4 GHz",
		"cpu_cores" => 2,
		"arch" => "ARMv8-A 64-bit",
		"gpu" => "PowerVR G6450",
		"gpu_cores" => 4,
		"memory" => "1 GB",
		"wifi" => "802.11 a/b/g/n/ac",
		"bluetooth" => "4.0",
		"sim" => "Nano-SIM",
		"power" => "3.82 V 11.1 W·h (2,915 mA·h)",
		"camera_mp" => "8 MP",
		"response" => true,
	),
	"unknown" => array(
		"cpu" => "Unknown",
		"cpu_cores" => 0,
		"arch" => "ARM",
		"gpu" => "Unknown",
		"gpu_cores" => 0,
		"memory" => "Unknown",
		"wifi" => "Unknown",
		"bluetooth" => "Unknown",
		"sim" => "Unknown",
		"power" => "Unknown",
		"camera_mp" => "Unknown",
		"response" => false,
	),
);

echo '<pre>'.json_encode($all_devices, JSON_PRETTY_PRINT).'</pre>';

/*
$unknown_device = array(
	"cpu" => "Unknown",
	"cpu_cores" => 0,
	"arch" => "ARM",
	"gpu" => "Unknown",
	"gpu_cores" => 0,
	"memory" => "Unknown",
	"wifi" => "Unknown",
	"bluetooth" => "Unknown",
	"sim" => "Unknown",
	"power" => "Unknown",
	"camera_mp" => "Unknown",
	"response" => false,
);

if ((isset($_GET["device"])) || (isset($_POST["device"]))) {
	$device;
	if (isset($_GET["device"])) {
		$device = $_GET["device"];
	}
	else if (isset($_POST["device"])) {
		$device = $_POST["device"];
	}
	
	if ($all_devices[$device]) {
		$device_info = $all_devices[$device];
		echo '<pre>'.json_encode($device_info, JSON_PRETTY_PRINT).'</pre>';
	}
	else {
		echo '<pre>'.json_encode($unknown_device, JSON_PRETTY_PRINT).'</pre>';
	}
}
*/
?>