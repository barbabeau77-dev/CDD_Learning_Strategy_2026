$connections = Get-NetTCPConnection -LocalPort 4321 -State Listen -ErrorAction SilentlyContinue

if ($null -eq $connections) {
  Write-Output "Port 4321 already free."
  exit 0
}

$pids = $connections | Select-Object -ExpandProperty OwningProcess -Unique
foreach ($pid in $pids) {
  try {
    Stop-Process -Id $pid -Force -ErrorAction Stop
    Write-Output "Stopped process $pid on port 4321."
  } catch {
    Write-Output "Could not stop process $pid on port 4321: $($_.Exception.Message)"
  }
}
