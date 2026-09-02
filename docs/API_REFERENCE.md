# API Reference

## Mobile Service Layer
- `authService.login(email, password)`
- `authService.register(email, password)`
- `authService.logout()`
- `healthService.getHealthRecords()`
- `healthService.addHealthRecord(record)`
- `medicationService.getMedications()`
- `medicationService.addMedication(medication)`
- `appointmentService.getAppointments()`
- `appointmentService.addAppointment(appointment)`
- `labService.getLabResults()`
- `labService.addLabResult(labResult)`

## Optional Backend Endpoint
- `GET /health` returns backend health status
