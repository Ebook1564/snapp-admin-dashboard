const dns = require('dns');
const host = 'database-1-restored.c3uoyku4eh6f.ap-south-1.rds.amazonaws.com';

console.log(`Checking DNS resolution for: ${host}`);

dns.lookup(host, (err, address, family) => {
  if (err) {
    console.error(`DNS Lookup failed for ${host}:`, err.message);
    console.log('\n--- Troubleshooting ---');
    console.log('1. Verify the endpoint in AWS RDS Console.');
    console.log('2. Ensure the RDS instance hasn\'t been renamed or deleted.');
    console.log('3. If in a VPC, check if DNS resolution is enabled for the VPC.');
  } else {
    console.log(`Successfully resolved ${host} to ${address} (IPv${family})`);
    console.log('\nDNS is fine. If the app still fails to connect, it might be a Security Group or VPC routing issue.');
  }
});
