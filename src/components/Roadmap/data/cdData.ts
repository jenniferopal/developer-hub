import { Horizon } from "./roadmapData";
export const CdData: Horizon = {
  "Now": {
    description: "Q2 2024, May - July 2024",
    feature: [
      {
        tag: [{ value: "Spinnaker" }, { value: "Migration" }],
        title: "Migrator tool for Spinnaker",
        description: "User’s can migrate their Spinnaker Pipelines to Harness",
      },
      {
        tag: [],
        title: "Native Helm Deployment - Blue Green and Canary Support",
        description: "User’s can now take their Helm Chart and Harness will orchestrate and manage the deployment via Helm. We leverage kustomize to perform the specific actions to support the Blue Green and Canary behavior along with Helm.",
      },
      {
        tag: [{value: "AWS"}, {value: "Serverless"}],
        title: "Multiple Runtimes Support for Serverless.com",
        description: "Users will be able to use multiple new supported runtimes with serverless.com functions.",
      },
      {
        tag: [],
        title: "Harness Code Support as a Manifest Source",
        description: "Users can use Harness Code as a manifest source for all Harness CD swimlanes.",
      },
      {
        tag: [{value: "GitOps"}],
        title: "Support Multiple Repository Sources",
        description: "Users can reference files in separate sources for their GitOps deployments.",
      },
      {
        tag: [{value: "Continuous Verification"}],
        title: "Add Google Big Query as a New Health Source",
        description: "Users will be able to select Google Big Query as their health source for Continuous Verification.",
      },
    ],
  },
  "Next": {
    description: "Q3 2024, Aug-Oct 2024",
    feature: [
      {
        tag: [{value: "Continuous Verification"}],
        title: "Continuous Verification using Manifest",
        description: "Users can now initiate a CV step using a manifest. This allows service owners to define the key metrics to be validated in CV during service definition.",
      }, 
      {
        tag: [{value: "Continuous Verification"}],
        title: "Health Source as a Part of a Service Entity",
        description: "Users can definte the CV analysis requirements in the service manifest.",
      },
    ],
  },
  "Later": {
    description: "Q4 2024+, Nov 2024 & Beyond",
    feature: [
      {
        tag: [],
        title: "Prometheus Default Health Source for Continuous Verification",
        description: "Users can deploy Helm Charts that have CRDs.",
      },
      {
        tag: [],
        title: "Step and Feature Usage Metrics and Reports",
        description: "User’s can get data about the steps and features they are leveraging within Harness and figure out how to maximize their usage of the product.",
      },
      {
        tag: [],
        title: "Serverless Dashboards",
        description: "Harness can help users visualize their serverless application endpoints and their failures, success, and metrics.",
      },
      {
        tag: [{ value: "AIDA" }],
        title: "AIDA driven Deployments",
        description: "Using Harness AIDA, Harness will help generate and deploy pipelines.",
      },
      {
        tag: [],
        title: "Continuous Verification Support for Traffic Shifting Offerings",
        description: "Users can use verify step with Harness Deployment workflows that use traffic shifting.",
      },
      {
        tag: [],
        title: "Continuous Verification Support for Serverless Lambda",
        description: "Users can use verify step for Serverless deployments with the ability to validate the Cloudwatch alarms.",
      },
      {
        tag: [{ value: "GitOps" }],
        title: "External Secret Operator in GitOps",
        description: "Harness will support GitOps Deployments to pull secrets from an external secret manager.",
      },
    ],
  },
  "Released": {
    description: "What has been released",
    feature: [
      {
        tag: [],
        title: "Kubernetes Traffic Shifting Support",
        description: "User’s can now integrate with Istio or any Service Mesh Interface and Harness can route traffic to specific endpoints for the deployed service.",
      },
      {
        tag: [{ value: "AWS" }],
        title: "AWS OIDC Support for Deployments",
        description: "All AWS Deployment Types now can leverage OIDC to authenticate and Harness can perform deployments via ODIC",
      },
      {
        tag: [{ value: "GCP" }],
        title: "GCP OIDC Support for Deployments",
        description: "All GCP Deployment Types now can leverage OIDC to authenticate and Harness can perform deployments via ODIC",
      },
      {
        tag: [],
        title: "Overrides V2 YAML Editor ",
        description: "Define overrides using YAML Editor",
      },
      {
        tag: [],
        title: "Selective Infrastructure configuration in Environment propagation",
        description: "Infrastructures can be selectively configured during environment propagation",
      },
    ]
  }
};
