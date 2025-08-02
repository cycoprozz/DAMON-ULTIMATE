import { prisma } from '@/lib/prisma';
import { AIAssistant } from '@/lib/ai/AIAssistant';

async function main() {
  // Test 1: Create a test customer
  const testCustomer = await prisma.customer.create({
    data: {
      name: "Test Customer",
      email: "test@example.com",
      phone: "+1234567890",
      company: "Test Company",
      status: "LEAD",
      notes: "Test customer for system verification",
    },
  });
  console.log("✅ Created test customer:", testCustomer);

  // Test 2: Create an interaction for the customer
  const interaction = await prisma.interaction.create({
    data: {
      customerId: testCustomer.id,
      type: "EMAIL",
      description: "Initial contact email",
      date: new Date(),
      outcome: "Customer interested in video production services",
      nextAction: "Schedule follow-up call",
    },
  });
  console.log("✅ Created test interaction:", interaction);

  // Test 3: Test AI Assistant
  const aiAssistant = new AIAssistant();
  const response = await aiAssistant.handleCustomerQuery(
    "What video production services do you offer?",
    testCustomer.id
  );
  console.log("✅ AI Assistant Response:", response);

  // Cleanup
  await prisma.interaction.delete({ where: { id: interaction.id } });
  await prisma.customer.delete({ where: { id: testCustomer.id } });
  console.log("✅ Cleanup completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
