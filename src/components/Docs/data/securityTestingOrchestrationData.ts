import {
    CardItem,
    CardSections,
    docType,
  } from "@site/src/components/LandingPage/TutorialCard";
  import { MODULES } from "@site/src/constants"
  
  /* Define the cards - start */
    
    // Docs
    export const docsCards: CardSections = [
        {
          name: "Get started",
          description:
            "",
          list: [
            {
              title: "STO tutorials",
              module: MODULES.sto,
              description:
                "Dive in with these tutorials.",
              link: "/docs/security-testing-orchestration/get-started/tutorials",
            },
            {
              title: "STO basics",
              module: MODULES.sto,
              description:
                "Learn about the security scanning problems facing developers and how STO provides the solutions they need.",
              link: "/docs/security-testing-orchestration/get-started/overview",
            },
            {
              title: "STO concepts",
              module: MODULES.sto,
              description:
                "Learn about key STO concepts such as scan targets, baselines, severities, and exemptions.",
              link: "/docs/category/key-concepts-in-sto/",
            },

          ],
        },
    
        {
          name: "Run scans and ingest data",
          description:
            "",
          list: [
            {
              title: "STO workflows",
              module: MODULES.sto,
              description:
                "Learn about the three high-level workflows for running scans and ingesting results: orchestration, extraction, and ingestion.",
              link: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/sto-workflows-overview",
            },
            {
              title: "Orchestration workflows",
              module: MODULES.sto,
              description:
                "Learn how to scan an object and ingest the results automatically in one step.",
              link: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/run-an-orchestrated-scan-in-sto",
            },
            {
              title: "Ingestion workflows",
              module: MODULES.sto,
              description:
                "Learn how to run scans in a separate step, or outside Harness entirely, and ingest the results.",
              link: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/ingest-scan-results-into-an-sto-pipeline",
            },
            {
                title: "Configure external scanners",
                module: MODULES.sto,
                description:
                  "STO includes integrations with over 30 external tools for scanning repositories, container images, applications, and configurations.",
                link: "/docs/category/sto-technical-reference",
              },
            {
              title: "Ingest data from custom scanners",
              module: MODULES.sto,
              description:
                "You can ingest custom Issues from any scanning tool. This topic shows you how.",
              link: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/ingesting-issues-from-other-scanners",
            },
          ],
        },  
        {
          name: "View, troubleshoot, and fix vulnerabilities",
          description:
            "",
          list: [
            {
              title: "View issues in target baselines over time",
              module: MODULES.sto,
              description:
                "See all detected issues in your main branches, latest images, and other target baselines.",
              link: "/docs/security-testing-orchestration/dashboards/sto-overview",
            },
            {
              title: "Create Jira tickets for detected issues",
              module: MODULES.ci,
              description:
                "You can easily create Jira tickets for issues detected during an STO build.",
              link: "/docs/security-testing-orchestration/notifications/jira-integrations",
            },
            {
              title: "Navigate and drill down into detected vulnerabilities",
              module: MODULES.ci,
              description:
                "The Security Testing Dashboard enables you to view, navigate, discover, and investigate detected vulnerabilities in your organization.",
              link: "/docs/security-testing-orchestration/dashboards/security-testing-dashboard",
            },

          ],
        },
    
        {
          name: "Stop builds based on detected vulnerabilities",
          description:
            "",
          list: [
            {
              title: "Exemptions (Ignore Rules) for Specific Issues",
              module: MODULES.sto,
              description:
                "Lean how to set fail_on_severity to stop pipeline builds and create exemptions (ignore rules) for specific vulnerabilities",
              link: "/docs/security-testing-orchestration/use-sto/stop-builds-based-on-scan-results/exemption-workflows",
            },
            {
              title: "Stop pipelines automatically using governance policies",
              module: MODULES.sto,
              description:
                "Learn how to create OPA policies to stop pipelines automatically",
              link: "/docs/security-testing-orchestration/policies/create-opa-policies",
            },
          ],
        },

        ];
    /* Define the cards - end */